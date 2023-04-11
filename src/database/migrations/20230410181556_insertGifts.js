/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex("gifts").insert([
    {"name": "pacotão fralda descartável P + 2 pacote algodão bola" },
    {"name": "pacotão fralda descartável P + 2 pacote algodão bola" },
    {"name": "pacotão fralda descartável P + 2 pacote algodão bola" },
    {"name": "pacotão fralda descartável P + sabonete glicerinado liquido" },
    {"name": "pacotão fralda descartável P + sabonete glicerinado liquido" },
    {"name": "pacotão fralda descartável P + sabonete liquido" },
    {"name": "pacotão fralda descartável P + shampoo neutro" },
    {"name": "pacotão fralda descartável P + shampoo neutro" },
    {"name": "pacotão fralda descartável P + pomada antiassadura" },
    {"name": "pacotão fralda descartável P + pomada antiassadura" },
    {"name": "pacotão fralda descartável M + lenço umedecido" },
    {"name": "pacotão fralda descartável M + lenço umedecido" },
    {"name": "pacotão fralda descartável M + sapatinho de lã (rosa/vermelho)" },
    {"name": "pacotão fralda descartável M + sapatinho tênis" },
    {"name": "pacotão fralda descartável M + sapatinho fechado" },
    {"name": "pacotão fralda descartável M + sapatinho" },
    {"name": "pacotão fralda descartável M + sandalia rosa" },
    {"name": "pacotão fralda descartável M + sandalia bege" },
    {"name": "pacotão fralda descartável M + kit tesourinha cor rosa" },
    {"name": "pacotão fralda descartável M + kit calcinha bunda rica (1-6 meses)" },
    {"name": "pacotão fralda descartável M + kit calcinha bunda rica (6-12 meses)" },
    {"name": "pacotão fralda descartável M + kit meias (6-9 meses)" },
    {"name": "pacotão fralda descartável M + kit meias (9-12 meses)" },
    {"name": "pacotão fralda descartável M + kit tiarinhas e lacinhos" },
    {"name": "pacotão fralda descartável M + kit luvas de malha e lã" },
    {"name": "pacotão fralda descartável M + kit mamadeira bico achatado cor rosa (0-6 meses)" },
    {"name": "pacotão fralda descartável M + kit mamadeira bico achatado cor rosa (+6 meses)" },
    {"name": "pacotão fralda descartável M + cobertor manta microfibra" },
    {"name": "pacotão fralda descartável M + manta de lã" },
    {"name": "pacotão fralda descartável M + manta de malha" },
    {"name": "pacotão fralda descartável M + manta de dupla face" },
    {"name": "pacotão fralda descartável M + conjunto de lençol c/ fronha p/ berço americano cor rosa" },
    {"name": "pacotão fralda descartável M + conjunto de lençol c/ fronha p/ berço americano cor lilas" },
    {"name": "pacotão fralda descartável M + body de manga comprida P" },
    {"name": "pacotão fralda descartável M + body de manga comprida M" },
    {"name": "pacotão fralda descartável G + body manga curta P" },
    {"name": "pacotão fralda descartável G + body manga curta G" },
    {"name": "pacotão fralda descartável G + conjunto pagão P" },
    {"name": "pacotão fralda descartável G + conjunto pagão P" },
    {"name": "pacotão fralda descartável G + kit calça mijão sem pi P" },
    {"name": "pacotão fralda descartável G + kit calça mijão sem pi M" },
    {"name": "pacotão fralda descartável G + kit camiseta com manga P" },
    {"name": "pacotão fralda descartável G + kit camiseta regata G" },
    {"name": "pacotão fralda descartável G + kit fralda de boca" },
    {"name": "pacotão fralda descartável G + macacão curto P" },
    {"name": "pacotão fralda descartável G + macacão curto M" },
    {"name": "pacotão fralda descartável G + macacão curto G" },
    {"name": "pacotão fralda descartável G + macacão comprido sem pi P" },
    {"name": "pacotão fralda descartável G + macacão comprido sem pi M" },
    {"name": "pacotão fralda descartável G + macacão comprido sem pi G" },
    {"name": "pacotão fralda descartável G + vestido M" },
    {"name": "pacotão fralda descartável G + vestido M" },
    {"name": "pacotão fralda descartável G + vestido G" },
    {"name": "pacotão fralda descartável G + vestido G" },
    {"name": "pacotão fralda descartável G + conjunto de roupa" },
    {"name": "pacotão fralda descartável G + toalha com capuz tipo fralda" },
    {"name": "pacotão fralda descartável G + toalha sem capuz tipo fralda" },
    {"name": "pacotão fralda descartável G + cueiro" },
    {"name": "pacotão fralda descartável G + kit cacia e balde" },
    {"name": "pacotão fralda descartável G + kit escova de cabelo cor rosa"}
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex("gifts").delete();
};
