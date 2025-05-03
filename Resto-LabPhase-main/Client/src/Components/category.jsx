import React from 'react'

function Category() {
    return (
        <div style={{paddingTop:"200px"}}>   
             <div>
            <>
                <nav className="category-nav">
                    <button className="category-btn active" data-category="appetizers">
                        Appetizers
                    </button>
                    <button className="category-btn" data-category="main-courses">
                        Breakfast
                    </button>
                    <button className="category-btn" data-category="desserts">
                        Drinks
                    </button>
                </nav>
                <section id="appetizers" className="menu-section active">
                    <h2>Appetizers</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <circle cx={50} cy={50} r={45} fill="hsl(38, 61%, 73%)" />
                                    <path
                                        d="M30,40 Q50,20 70,40"
                                        fill="none"
                                        stroke="#5a3921"
                                        strokeWidth={3}
                                    />
                                    <circle cx={50} cy={50} r={15} fill="#c17e3f" />
                                </svg>
                                <span className="new-badge">NEW</span>
                            </div>
                            <div className="item-details">
                                <h3>Crispy Calamari</h3>
                                <p>Tender squid rings in light batter, served with citrus aioli</p>
                                <span className="price">$14.95</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <rect
                                        x={20}
                                        y={30}
                                        width={60}
                                        height={40}
                                        fill="hsl(38, 61%, 73%)"
                                    />
                                    <circle cx={50} cy={40} r={15} fill="#f4a460" />
                                    <path
                                        d="M30,60 Q50,70 70,60"
                                        fill="none"
                                        stroke="#deb887"
                                        strokeWidth={3}
                                    />
                                </svg>
                            </div>
                            <div className="item-details">
                                <h3>Crab Cakes</h3>
                                <p>Premium lump crab meat, pan-seared to golden perfection</p>
                                <span className="price">$16.95</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <ellipse cx={50} cy={50} rx={40} ry={30} fill="hsl(38, 61%, 73%)" />
                                    <path
                                        d="M30,45 Q50,60 70,45"
                                        fill="none"
                                        stroke="#5a3921"
                                        strokeWidth={3}
                                    />
                                </svg>
                            </div>
                            <div className="item-details">
                                <h3>Truffle Bruschetta</h3>
                                <p>Toasted artisanal bread with truffle-infused mushroom spread</p>
                                <span className="price">$12.95</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="main-courses" className="menu-section">
                    <h2>Main Courses</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <circle cx={50} cy={50} r={40} fill="hsl(38, 61%, 73%)" />
                                    <path d="M30,45 L70,45" stroke="#8b4513" strokeWidth={4} />
                                    <path d="M35,55 L65,55" stroke="#8b4513" strokeWidth={4} />
                                </svg>
                                <span className="new-badge">NEW</span>
                            </div>
                            <div className="item-details">
                                <h3>Wagyu Burger</h3>
                                <p>Premium Wagyu beef with truffle aioli and aged cheddar</p>
                                <span className="price">$24.95</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <path
                                        d="M20,50 Q50,20 80,50 Q50,80 20,50"
                                        fill="hsl(38, 61%, 73%)"
                                    />
                                    <circle cx={50} cy={50} r={10} fill="#deb887" />
                                </svg>
                            </div>
                            <div className="item-details">
                                <h3>Lobster Risotto</h3>
                                <p>Creamy Arborio rice with fresh lobster and parmesan</p>
                                <span className="price">$32.95</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <rect
                                        x={25}
                                        y={25}
                                        width={50}
                                        height={50}
                                        fill="hsl(38, 61%, 73%)"
                                    />
                                    <path d="M25,50 H75" stroke="#5a3921" strokeWidth={3} />
                                </svg>
                            </div>
                            <div className="item-details">
                                <h3>Chilean Sea Bass</h3>
                                <p>Pan-seared sea bass with saffron sauce and seasonal vegetables</p>
                                <span className="price">$36.95</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="desserts" className="menu-section">
                    <h2>Desserts</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <circle cx={50} cy={50} r={35} fill="hsl(38, 61%, 73%)" />
                                    <path
                                        d="M35,50 Q50,35 65,50"
                                        fill="none"
                                        stroke="#5a3921"
                                        strokeWidth={3}
                                    />
                                </svg>
                                <span className="new-badge">NEW</span>
                            </div>
                            <div className="item-details">
                                <h3>Crème Brûlée</h3>
                                <p>Classic vanilla bean custard with caramelized sugar crust</p>
                                <span className="price">$10.95</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-image">
                                <svg viewBox="0 0 100 100">
                                    <polygon points="30,30 70,30 50,70" fill="hsl(38, 61%, 73%)" />
                                    <circle cx={50} cy={40} r={10} fill="#5a3921" />
                                </svg>
                            </div>
                            <div className="item-details">
                                <h3>Chocolate Soufflé</h3>
                                <p>Warm chocolate soufflé with vanilla bean ice cream</p>
                                <span className="price">$12.95</span>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div></div>
    )
}

export default Category