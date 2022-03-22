import React, { useState, useCallback } from 'react';

import {
  Notacion,
  Container,
  Content,
  Header,
  Circle,
  ContentInput,
  Footer,
  ContentForm,
} from './styles';

function Form() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'React',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Vue',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Angular',
      quantity: 0,
    },
  ]);

  const [comments, setComments] = useState('');

  const incrementQuantity = (productId) => {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    setProducts(newProducts);
  };

  const decrementQuantity = (productId) => {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity > 0 ? product.quantity - 1 : 0,
        };
      }

      return product;
    });

    setProducts(newProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkoutProducts = products.filter((product) => product.quantity > 0);

    console.log({ checkoutProducts, comments });
  };

  return (
    <Container>
      <Header>
        <Circle />
        <p>
          Formulário <br />
          para comprar de <br />
          <span>Pacote de adesivos</span>
        </p>
        <img src='/src/assets/images/pacote.png' alt='logo' />
      </Header>
      <Content onSubmit={handleSubmit}>
        <ContentForm>
          <p>Quais adesivos:</p>

          {products.map((product) => (
            <ContentInput key={product.id}>
              <label>{product.name}</label>

              <button type='button' onClick={() => decrementQuantity(product.id)}>
                -
              </button>
              <span>{product.quantity}</span>
              <button type='button' onClick={() => incrementQuantity(product.id)}>
                +
              </button>
            </ContentInput>
          ))}
          <Notacion>
            <p>Observações:</p>
            <textarea
              value={comments}
              onChange={({ target }) => setComments(target.value)}
              placeholder='Alguma dúvida? Recado?'
            ></textarea>
          </Notacion>
        </ContentForm>
        <Footer>
          <button type='submit'>ENVIAR</button>
        </Footer>
      </Content>
    </Container>
  );
}

export default Form;
