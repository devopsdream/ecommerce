/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateProductInput = {
  id?: string | null;
  name: string;
  sku: string;
  imageurl: string;
  department?: Array<string | null> | null;
  price: number;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  sku?: string | null;
  imageurl?: string | null;
  department?: Array<string | null> | null;
  price?: number | null;
};

export type DeleteProductInput = {
  id?: string | null;
};

export type CreateCartInput = {
  id?: string | null;
  product: string;
  department?: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type UpdateCartInput = {
  id: string;
  product?: string | null;
  department?: Array<string | null> | null;
  sku?: string | null;
  price?: number | null;
  owner?: string | null;
};

export type DeleteCartInput = {
  id?: string | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  sku?: ModelStringFilterInput | null;
  imageurl?: ModelStringFilterInput | null;
  department?: ModelStringFilterInput | null;
  price?: ModelFloatFilterInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelCartFilterInput = {
  id?: ModelIDFilterInput | null;
  product?: ModelStringFilterInput | null;
  department?: ModelStringFilterInput | null;
  sku?: ModelStringFilterInput | null;
  price?: ModelFloatFilterInput | null;
  owner?: ModelStringFilterInput | null;
  and?: Array<ModelCartFilterInput | null> | null;
  or?: Array<ModelCartFilterInput | null> | null;
  not?: ModelCartFilterInput | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type CreateCartMutation = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type UpdateCartMutation = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type DeleteCartMutation = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type GetProductsQuery = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    sku: string;
    imageurl: string;
    department: Array<string | null> | null;
    price: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetCartQuery = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type ListCartsQuery = {
  __typename: "ModelCartConnection";
  items: Array<{
    __typename: "Cart";
    id: string;
    product: string;
    department: Array<string | null> | null;
    sku: string;
    price: number;
    owner: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  sku: string;
  imageurl: string;
  department: Array<string | null> | null;
  price: number;
};

export type OnCreateCartSubscription = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type OnUpdateCartSubscription = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

export type OnDeleteCartSubscription = {
  __typename: "Cart";
  id: string;
  product: string;
  department: Array<string | null> | null;
  sku: string;
  price: number;
  owner: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProduct(
    input: CreateProductInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!) {
        updateProduct(input: $input) {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!) {
        deleteProduct(input: $input) {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async CreateCart(input: CreateCartInput): Promise<CreateCartMutation> {
    const statement = `mutation CreateCart($input: CreateCartInput!) {
        createCart(input: $input) {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCartMutation>response.data.createCart;
  }
  async UpdateCart(input: UpdateCartInput): Promise<UpdateCartMutation> {
    const statement = `mutation UpdateCart($input: UpdateCartInput!) {
        updateCart(input: $input) {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCartMutation>response.data.updateCart;
  }
  async DeleteCart(input: DeleteCartInput): Promise<DeleteCartMutation> {
    const statement = `mutation DeleteCart($input: DeleteCartInput!) {
        deleteCart(input: $input) {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCartMutation>response.data.deleteCart;
  }
  async GetProducts(): Promise<GetProductsQuery> {
    const statement = `query GetProducts {
        getProducts {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <GetProductsQuery>response.data.getProducts;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            sku
            imageurl
            department
            price
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  async GetCart(id: string): Promise<GetCartQuery> {
    const statement = `query GetCart($id: ID!) {
        getCart(id: $id) {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCartQuery>response.data.getCart;
  }
  async ListCarts(
    filter?: ModelCartFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCartsQuery> {
    const statement = `query ListCarts($filter: ModelCartFilterInput, $limit: Int, $nextToken: String) {
        listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            product
            department
            sku
            price
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCartsQuery>response.data.listCarts;
  }
  OnCreateProductListener: Observable<
    OnCreateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`
    )
  ) as Observable<OnCreateProductSubscription>;

  OnUpdateProductListener: Observable<
    OnUpdateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`
    )
  ) as Observable<OnUpdateProductSubscription>;

  OnDeleteProductListener: Observable<
    OnDeleteProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          sku
          imageurl
          department
          price
        }
      }`
    )
  ) as Observable<OnDeleteProductSubscription>;

  OnCreateCartListener: Observable<OnCreateCartSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCart {
        onCreateCart {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`
    )
  ) as Observable<OnCreateCartSubscription>;

  OnUpdateCartListener: Observable<OnUpdateCartSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCart {
        onUpdateCart {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`
    )
  ) as Observable<OnUpdateCartSubscription>;

  OnDeleteCartListener: Observable<OnDeleteCartSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCart {
        onDeleteCart {
          __typename
          id
          product
          department
          sku
          price
          owner
        }
      }`
    )
  ) as Observable<OnDeleteCartSubscription>;
}
