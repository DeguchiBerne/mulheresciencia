'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const {ACERVO,MISSOES}=require('./acervo.js'),OBJETOS=require('./vitrines.js');
assert.equal(ACERVO.length,8);assert.equal(MISSOES.length,3);assert.equal(ACERVO.filter(x=>x.origin==='br').length,4);
for(const x of ACERVO){const o=OBJETOS[x.id];assert.ok(o);assert.ok(!o.fact.includes(x.name));assert.ok(fs.existsSync(path.join(__dirname,'assets',o.image+'.svg')));assert.ok(x.source.startsWith('https://'));if(o.type==='order')assert.equal(new Set(o.answer).size,3);else assert.ok(Number.isInteger(o.answer));}
assert.equal(new Set(Object.values(OBJETOS).map(o=>o.type)).size,3);
console.log('OK: oito trajetórias e imagens locais, três missões e três modalidades de desafio.');
async function browserTest(){
const {chromium}=require('./.qa/node_modules/playwright-core');
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true});
try{
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
await page.screenshot({path:path.join(__dirname,'.qa','01-entrada.png'),fullPage:true});
await page.locator('#start').click();assert.equal(await page.locator('#cards .card').count(),8);
async function noNames(){const text=await page.locator('body').innerText();for(const x of ACERVO)assert.ok(!text.includes(x.name),'Nome visível antes da revelação: '+x.name);}
await noNames();
await page.locator('[data-open="mary"]').first().click();await page.locator('#detail [data-answer="1"]').last().click();assert.ok((await page.locator('#answer-feedback').innerText()).includes('Ainda não'));
await page.locator('#detail [data-answer="0"]').last().click();assert.ok(await page.locator('#unlocked').isVisible());await page.screenshot({path:path.join(__dirname,'.qa','02-investigacao.png'),fullPage:true});await page.locator('#detail-select').click();assert.equal(await page.locator('#selected li:not(.empty-slot)').count(),1);
await page.locator('[data-open="katherine"]').first().click();await page.locator('#check-order').click();assert.ok((await page.locator('#answer-feedback').innerText()).includes('Ainda não'));
await page.locator('[data-order="1"][data-dir="-1"]').click();await page.locator('[data-order="2"][data-dir="-1"]').click();await page.locator('#check-order').click();await page.locator('#detail-select').click();
await page.locator('[data-open="johanna"]').first().click();await page.locator('#hint').click();assert.ok((await page.locator('#answer-feedback').innerText()).includes('solo'));await page.locator('#detail [data-answer="1"]').last().click();await page.locator('#detail-select').click();
await page.locator('[data-open="tu"]').first().click();await page.locator('#detail [data-answer="0"]').click();await page.locator('#detail-select').click();assert.equal(await page.locator('#compose').isEnabled(),true);await noNames();
await page.locator('[data-open="bertha"]').first().click();await page.locator('#detail [data-answer="0"]').last().click();await page.locator('#detail-select').click();assert.ok(await page.locator('#detail').isVisible());assert.ok((await page.locator('#status').innerText()).includes('ocupadas'));await page.keyboard.press('Escape');
await page.locator('[data-move="tu"][data-dir="-1"]').click();const order=await page.locator('#selected li:not(.empty-slot)>span').allTextContents();assert.ok(order[2].includes('plantas'));
await page.locator('#compose').click();await noNames();await page.locator('#exhibit-title').fill('O invisível que transforma');await page.locator('#exhibit-reason').fill('<img src=x onerror=alert(1)> Ciência e evidências.');await page.locator('#exhibit-form button[type="submit"], #exhibit-form button:not([type])').click();
assert.equal(await page.locator('#gallery article').count(),4);for(const id of ['mary','katherine','johanna','tu'])assert.ok((await page.locator('#gallery').innerText()).includes(ACERVO.find(x=>x.id===id).name));assert.equal(await page.locator('#result-reason img').count(),0);
await page.locator('#edit').click();await page.locator('#compose').click();await page.locator('#exhibit-reason').fill('Pesquisas sobre o que nem sempre vemos conectam estas quatro histórias: do solo à vida antiga e à exploração espacial.');await page.locator('#exhibit-form button:not([type])').click();await page.locator('#status').evaluate(el=>el.textContent='');await page.locator('#gallery details').first().evaluate(el=>el.open=true);assert.ok(await page.locator('#gallery a.source').first().isVisible());
await page.screenshot({path:path.join(__dirname,'.qa','03-exposicao.png'),fullPage:true});await page.pdf({path:path.join(__dirname,'.qa','exposicao.pdf'),format:'A4',printBackground:true});
await page.reload();assert.ok(await page.locator('#result').isVisible());await page.locator('#edit').click();await page.locator('#teacher-open').click();assert.ok(await page.locator('#teacher').isVisible());await page.keyboard.press('Escape');
await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(__dirname,'.qa','04-celular.png'),fullPage:true});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Overflow horizontal no celular');
await page.locator('[data-open="mary"]').first().click();assert.ok(await page.locator('#detail').isVisible());assert.ok(await page.evaluate(()=>{const e=document.getElementById('detail');return e.scrollWidth<=e.clientWidth;}),'Overflow no diálogo');await page.keyboard.press('Escape');
const loaded=await page.locator('#cards img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0));assert.ok(loaded,'Imagem local não carregada');
page.on('dialog',d=>d.accept());await page.locator('#compose').click();await page.locator('#exhibit-form button:not([type])').click();await page.locator('#restart').click();assert.equal(await page.locator('#selected li.empty-slot').count(),4);assert.ok(await page.locator('#compose').isDisabled());
assert.deepEqual(errors,[]);console.log('OK Chrome: identidades ocultas, três desafios, erro/tentativa, pistas, limite de quatro, reordenação, inauguração, fontes, texto seguro, restauração, imagens, diálogo, celular, PDF e reinício.');
}finally{await browser.close();}}
if(process.argv.includes('--browser'))browserTest().catch(e=>{console.error(e);process.exitCode=1;});

