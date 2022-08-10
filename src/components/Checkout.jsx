import "./Checkout.css";

function Pedido() {
  return (
    <div id="pedido">
      <span>
        <h2>Seu pedido</h2>
      </span>
      <span>
        <a href="#">
          (<i class="fa-solid fa-angle-left"></i> Voltar para o carrinho)
        </a>
      </span>
      <table cellspacing="0" cellpadding="0">
        <thead>
          <th></th>
          <th>Produto</th>
          <th>Atributos</th>
          <th class="produto_head_preço">Preço Unit.</th>
          <th class="produto_head_preço">Total</th>
        </thead>
        <tbody>
          <tr id="produtos_body">
            <td class="produto_img">
              <img
                src="./img/prod1.png"
                alt="Kit Amortecedor Teste - Virtual"
              />
              <div class="produto_img_qt">5x</div>
            </td>
            <td>
              <p class="produto_nome">Kit Amortecedor Teste - Virtual</p>
              <p class="produto_ref">Referência 04357</p>
            </td>
            <td></td>
            <td>
              <p class="produto_preco">
                <span class="dashed">R$ 3.000,00</span>
                <span>R$ 180,00</span>
              </p>
            </td>
            <td>
              <p class="produto_preco">
                <span>R$ 900,00</span>
              </p>
            </td>
          </tr>
          <tr id="produtos_body">
            <td class="produto_img">
              <img src="./img/prod2.png" alt="Celular" />
              <div class="produto_img_qt">5x</div>
            </td>
            <td>
              <p class="produto_nome">Celular</p>
              <p class="produto_ref">Referência 5675675</p>
            </td>
            <td>
              <p class="produto_atributo">
                <span>Cor: </span>
                <span>
                  <strong>Medium Brown</strong>
                </span>
              </p>
            </td>
            <td>
              <p class="produto_preco">
                <span class="dashed">R$ 10.000,00</span>
                <span>R$ 90,00</span>
              </p>
            </td>
            <td>
              <p class="produto_preco">
                <span>R$ 450,00</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function Envio() {
  return (
    <div id="envio">
      <h3>Você</h3>
      <div id="voce">
        <span id="voce_email">user@email.com</span>
        <span id="voce_email_link">
          <a href="#">Sair e Trocar</a>
        </span>
      </div>
      <h3>Destino</h3>
      <div class="address-carrousel">
        <div class="address slide-in-right">
          <p>Plataforma Dollyinho</p>
          <p>Alameda dos Jacarandás, 140</p>
          <p>São Luiz - Belo Horizonte - MG</p>
          <p>
            <strong>31275-060</strong>
          </p>
          <p>
            Endereço para envio{" "}
            <input type="radio" name="addresss" id="address" value="1" />
          </p>
        </div>
        <div class="address slide-in-right">
          <p>Plataforma do seu Amiguinho</p>
          <p>Alameda dos Jacarandás, 140</p>
          <p>São Luiz - Belo Horizonte - MG</p>
          <p>
            <strong>31275-060</strong>
          </p>
          <p>
            Endereço para envio{" "}
            <input type="radio" name="addresss" id="address" value="2" />
          </p>
        </div>
        <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a>
      </div>
      <br />
      <div style="text-align: center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
      </div>
      <div id="frete_cont">
        <h3>Forma de Envio</h3>
        <div id="envio_cont">
          <div class="envio_cont3">
            <div class="f_envio">
              <input type="radio" name="envio_forma" id="1" />
              <label for="1" class="envio_nome">
                Retirada no local
              </label>
              <p class="envio_preco">Grátis</p>
            </div>
            <div class="f_envio">
              <input type="radio" name="envio_forma" id="2" />
              <label for="2" class="envio_nome">
                Motoboy
              </label>
              <p class="envio_preco">R$ 15,00</p>
            </div>
            <div class="f_envio">
              <input type="radio" name="envio_forma" id="3" />
              <label for="3" class="envio_nome">
                PAC
              </label>
              <p class="envio_preco">R$ 32,20</p>
              <p class="envio_previsao">Previsão: até 3 dias úteis</p>
            </div>
          </div>
          <div class="envio_cont3">
            <div class="f_envio">
              <input type="radio" name="envio_frete" id="1" />
              <label for="1" class="envio_nome">
                Frete Grátis
              </label>
              <p class="envio_preco">Grátis</p>
            </div>
            <div class="f_envio">
              <input type="radio" name="envio_frete" id="2" />
              <label for="2" class="envio_nome">
                Retirar próximo ao meu endereço
              </label>
              <p class="envio_preco">R$ 20,70</p>
              <p class="envio_previsao">Previsão: até 4 dias úteis</p>
            </div>
            <div class="f_envio">
              <input type="radio" name="envio_frete" id="3" />
              <label for="3" class="envio_nome">
                Package
              </label>
              <p class="envio_preco">R$ 39,52</p>
              <p class="envio_previsao">Previsão: até 4 dias úteis</p>
            </div>
          </div>
        </div>
      </div>
      <div id="info">
        <i class="fa-solid fa-info fa-2xl"></i>Prazo de entrega dos Correios é
        de até 5 dias úteis seguintes ao da postagem.
      </div>
      <p id="obs_label">Observações</p>
      <textarea name="obs" id="obs" cols="30" rows="5"></textarea>
    </div>
  );
}
function Resumo() {
  return (
    <div id="resumo">
      <h3>Resumo</h3>
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td class="row-div">
              <p class="prices-header">Subtotal</p>
            </td>
            <td class="row-div">
              <p class="prices">R$ 1350,00</p>
            </td>
          </tr>
          <tr>
            <td class="row-div">
              <p class="prices-header">PAC</p>
            </td>
            <td class="row-div">
              <p class="prices">+ R$ 32,20</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="prices-header total-header">Total do Pedido</p>
            </td>
            <td>
              <p class="prices total">R$ 1382,20</p>
              <p class="prices">em até 3X de R$ 460,73</p>
              <p class="prices">ou 1382,20 no</p>
              <p class="prices">depósito ou transferência com % de desconto</p>
            </td>
          </tr>
          <tr>
            <td class="points" colspan="2">
              <img src="./img/refund.png" />
              <p>Você ganha 1350 pontos nesta compra. Aproveite!</p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p id="desconto">
                <i class="fa-solid fa-percent"></i> Possui cupom de desconto?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Como deseja pagar?</h3>
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td>
              <input type="radio" name="forma_pagamento" id="1" />
            </td>
            <td>
              <i class="fa-solid fa-qrcode"></i>
            </td>
            <td>
              <p class="forma_pagamento_titulo">Pix</p>
            </td>
            <td>
              <p class="forma_pagamento_desc"></p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="forma_pagamento" id="2" />
            </td>
            <td>
              <i class="fa-solid fa-barcode"></i>
            </td>
            <td>
              <p class="forma_pagamento_titulo">Boleto</p>
            </td>
            <td>
              <p class="forma_pagamento_desc">à vista</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="forma_pagamento" id="3" />
            </td>
            <td>
              <i class="fa-solid fa-credit-card"></i>
            </td>
            <td>
              <p class="forma_pagamento_titulo">Cartão de Crédito</p>
            </td>
            <td>
              <p class="forma_pagamento_desc">
                em 2X sem juros ou até 3x no cartão.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="forma_pagamento" id="4" />
            </td>
            <td>
              <i class="fa-solid fa-money-bill-transfer"></i>
            </td>
            <td>
              <p class="forma_pagamento_titulo">Depósito Bancário</p>
            </td>
            <td>
              <p class="forma_pagamento_desc">
                <img
                  class="forma_pagamento_img"
                  src="./img/bb.png"
                  alt="Banco do Brasil"
                />
                <img
                  class="forma_pagamento_img"
                  src="./img/bradesco.png"
                  alt="Bradesco"
                />
                <img
                  class="forma_pagamento_img"
                  src="./img/caixa.png"
                  alt="Caixa Econômica Federal"
                />
                <img
                  class="forma_pagamento_img"
                  src="./img/itau.png"
                  alt="Itaú"
                />
                <img
                  class="forma_pagamento_img"
                  src="./img/sicoob.png"
                  alt="SICOOB"
                />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function Checkout() {
  return (
    <main>
      <Pedido />
      <Envio />
      <Resumo />
      <div id="rodape">
        <a href="#">
          <p>
            <i class="fa-solid fa-angle-left"></i> Voltar para o carrinho
          </p>
        </a>
      </div>
    </main>
  );
}

export default Checkout;
