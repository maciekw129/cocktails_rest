import { Ingredient } from 'src/modules/ingredients/ingredient.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cocktail } from './cocktail.entity';

@Entity()
export class IngredientItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Cocktail, (cocktail) => cocktail.ingredientItem)
  cocktail: Cocktail;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.ingredientItem)
  ingredient: Ingredient;
}
