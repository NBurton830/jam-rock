import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <section id="popular" class="module">
  <div class="container">

    <div class="row">
      <div class="col-sm-6 col-sm-offset-3">
        <div class="module-header wow fadeInUp animated">
          <h2 class="module-title">Jam Rock Caribbean Cuisine</h2>
          <h3 class="module-subtitle">
            144 E Lincoln HWY.
            Coatesville, PA 19320
            610.850.9118
          </h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <h3 class="menu-heading">Entrees</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Oxtail & Butter Beans</h4>
              <div class="menu-detail">Deliciously seasoned with herbs and spices of Jamaica.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$25</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Curry Goat</h4>
              <div class="menu-detail">A Delicious mixture of Jamaican curry, Island herbs spices, and vegetables.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$20</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Jerk Chicken</h4>
              <div class="menu-detail">A mild or spicy combination of the Best Jamaican herbs and spices.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$12/14.94</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Curry Chicken</h4>
              <div class="menu-detail">A delicious mixture of Jamaican curry, Island herbs spices, and vegetables.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$12/14.94</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Stew Chicken</h4>
              <div class="menu-detail">Delicately seasoned in a mixture of Island herbs, spices and sauces cooked to perfection</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$12/$14.94</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Jerk Chicken and Oxtail Combo</h4>
              <div class="menu-detail">A mild or spicy combinationof the two best Jamaican dishes</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$24</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Ackee and Saltfish</h4>
              <div class="menu-detail">Jamaican national dish made from the Ackee fruit. Deliciously seasoned with herbs, combine with salt fish to balance the taste, served with rice & peas</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$17</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Vegi Platter</h4>
              <div class="menu-detail">Steamed cabbage served with plaintains, rice & peas, and Jerk sauce, (no meat product in Jerk sauce)</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$6.25/$8</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Sandwiches</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">JamRock's Jerk Chicken Sandwiches</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$10</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">JamRock's Fish Sandwiches</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$10</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Seafood</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Tilapia Fish</h4>
              <div class="menu-detail">Breaded with a special rub, fried to perfection and smothered with sauce of your choice.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$12/$14.94</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Brown Stew Fish</h4>
              <div class="menu-detail">Snapper(Done to order)</div>
              <div class="menu-detail">Delicately seasoned in a mixture of Island herbs, spices, vegetables and brown sauce cooked to perfection.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$25</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Steamed Fish </h4>
              <div class="menu-detail">Snapper(Done to order)</div>
              <div class="menu-detail">Steamed in a mixture of Island herbs, spices, vegetables, and brown sauce cooked to perfection</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$25</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Appetizers</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Jamrock's Jerk Wings(6 wings)</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$12</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Brown Stew Fish</h4>
              <div class="menu-detail">Snapper(Done to order)</div>
              <div class="menu-detail">Delicately seasoned in a mixture of Island herbs, spices, vegetables and brown sauce cooked to perfection.</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$25</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Steamed Fish </h4>
              <div class="menu-detail">Snapper(Done to order)</div>
              <div class="menu-detail">Steamed in a mixture of Island herbs, spices, vegetables, and brown sauce cooked to perfection</div>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$25</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Patties</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Spicy Beef</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Coco Bread</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$2.75</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Sides Only</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Cabbage</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$4.75</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Fried Plantains</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$4</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Rice & Peas</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$4.75</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Dessert</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Carrot Cake</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Corn Bread</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$2</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Chocolate Cake</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Red Velvet Cake</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Jamaican D&G Sodas</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Pineapple</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Kola Champagne</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Ginger Beer</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Ting</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$3</h4>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <h3 class="menu-heading">Juice</h3>

        <div class="menu">
          <div class="row">
            <div class="col-sm-8">
              <h4 class="menu-title">Everfresh Juice</h4>
            </div>
            <div class="col-sm-4 menu-price-detail">
              <h4 class="menu-price">$2</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
