import { Ingredient } from 'src/modules/ingredients/entities/ingredient.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cocktail } from '../../cocktails/cocktail.entity';
import { Unit } from '../ingredients.model';

@Entity()
export class IngredientItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit: Unit;

  @Column('decimal', { precision: 6, scale: 2 })
  quantity: number;

  @ManyToOne(() => Cocktail, (cocktail) => cocktail.ingredientItem)
  cocktail: Cocktail;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.ingredientItem)
  ingredient: Ingredient;
}
