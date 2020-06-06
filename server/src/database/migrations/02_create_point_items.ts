import Knex from 'knex';

export async function up(knex: Knex) {
   // CRIAR A TABELA
   return knex.schema.createTable('point_items', table => {
      table.increments('id').primary();
      table.integer('item_id')
         .notNullable()
         .references('id')
         .inTable('items');
      table.integer('point_id')
         .notNullable()
         .references('id')
         .inTable('points');
   })
}

export async function down(knex: Knex) {
   // DELETAR A TABELA PARA VOLTAR ATRÁS
   return knex.schema.dropTable('point_items')
}