import { ApiProperty } from '@nestjs/swagger';

export class CreateAddtocardDto {
  @ApiProperty({
    required: true,
    example: 'product-67890',
    description: 'The ID of the product being added to the cart',
  })
  productId: string;

  @ApiProperty({
    required: true,
    example: 2,
    description: 'The quantity of the product to add to the cart',
  })
  quantity: number;
}

export class UpdateAndCreateAddtocardDto extends CreateAddtocardDto {
  @ApiProperty({
    required: true,
    example: 'user-12345',
    description: 'The ID of the user adding the product to the cart',
  })
  userId: string;
}
