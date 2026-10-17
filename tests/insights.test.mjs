import test from 'node:test';
import assert from 'node:assert/strict';
import {insightFor} from '../dist/assets/diagnostic-insights.js';
import {questionsFor,areas} from '../dist/assets/diagnostic-engine.js';
test('Vendas personaliza a mensagem conforme acompanhamento perdido ou organizado',()=>{const q={id:'ven_dor',group:'Vendas'};assert.match(insightFor(q,{ven_fluxo:'perdido'}).text,/CRM/);assert.doesNotMatch(insightFor(q,{ven_fluxo:'claro'}).text,/oportunidades se perdem/);});
test('Estoque usa contexto da resposta anterior e não confirma falha quando saldo é confiável',()=>{const q={id:'est_compra',group:'Estoque e compras'};assert.match(insightFor(q,{est_saldo:'diverge'}).text,/entradas e saídas/);assert.match(insightFor(q,{est_saldo:'sim'}).text,/saldo confiável/);});
test('Frequência é equilibrada: três momentos gerais e um por área selecionada',()=>{for(const n of [0,1,3,9]){const a={areas:areas.slice(0,n).map(([id])=>id)};assert.equal(questionsFor(a).filter(q=>insightFor(q,a)).length,3+n);}});
test('Insight não modifica respostas e não aparece em todas as perguntas',()=>{const a={areas:['vendas'],ven_fluxo:'perdido'},snapshot=JSON.stringify(a);const qs=questionsFor(a);for(const q of qs)insightFor(q,a);assert.equal(JSON.stringify(a),snapshot);assert.equal(insightFor({id:'prazo',group:'Próximo passo'},a),null);});
