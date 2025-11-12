const Products = ({ items }) => {
  return (
    <section className="section products" id="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {items.map((item) => (
          <article className="product-card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="piece">{item.piece}</p>
            <p className="price">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products

