import React, { useState, useRef } from 'react';

const packageOptions = [
    {
        name: 'products',
        price: 0.5,
        quanity: 0,
        selected: false,
        total: function () {
            return this.price * this.quanity;
        },
    },
    {
        name: 'orders',
        price: 0.25,
        quanity: 0,
        selected: false,
        total: function () {
            return this.price * this.quanity;
        },
    },
    {
        name: 'Basic',
        total: 0,
        selected: false,
    },
    {
        name: 'Professional',
        total: 40,
        selected: false,
    },
    {
        name: 'Premium',
        total: 60,
        selected: false,
    },
    {
        name: 'Accounting',
        total: 35,
        selected: false,
    },
    {
        name: 'Terminal',
        total: 5,
        selected: false,
    },
];

function Calculator() {
    const [productsQuantity, setProductsQuantity] = useState('');
    const [monthlyOrders, setMonthlyOrders] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [accountingChecked, setAccountingChecked] = useState(false);
    const [terminalChecked, setTerminalChecked] = useState(false);

    function handleChecked() {}

    return (
        <section className="calculator">
            <div className="calculator_container">
                <div className="calculator_box">
                    <h2 className="calculator_hdl">
                        Calculate how much you'll pay
                    </h2>
                    <div className="calculator_columns">
                        <div className="calculator_column">
                            <div className="calculator_inputbox">
                                <input
                                    className="input_products"
                                    type="number"
                                    placeholder="Products quantity"
                                    value={productsQuantity}
                                    onChange={(e) =>
                                        setProductsQuantity(e.target.value)
                                    }
                                />
                            </div>
                            <div className="calculator_inputbox">
                                <input
                                    className="input_orders"
                                    type="number"
                                    placeholder="Estimated orders in month"
                                    value={monthlyOrders}
                                    onChange={(e) =>
                                        setMonthlyOrders(e.target.value)
                                    }
                                />
                            </div>
                            <div className="calculator_select">
                                <div className="input_package left-colmun">
                                    Choose package
                                </div>
                                <ul className="select_options">
                                    <li className="select_option-basic left-colmun">
                                        Basic
                                    </li>
                                    <li className="select_option-professional left-colmun">
                                        Professional
                                    </li>
                                    <li className="select_option-premium left-colmun">
                                        Premium
                                    </li>
                                </ul>
                            </div>
                            <div className="checkbox_box left-colmun">
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="accounting"
                                    checked={accountingChecked}
                                    onClick={(e) =>
                                        setAccountingChecked(e.target.checked)
                                    }
                                />
                                <label htmlFor="accounting">Accounting</label>
                            </div>
                            <div className="checkbox_box left-colmun">
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="terminal"
                                    checked={terminalChecked}
                                    onClick={(e) =>
                                        setTerminalChecked(e.target.checked)
                                    }
                                />
                                <label htmlFor="terminal">
                                    Rental of payment terminal
                                </label>
                            </div>
                        </div>
                        <div className="calculator_column calculator_column-right">
                            {productsQuantity ? (
                                <div className="calculator_products-line calculator-line right-column">
                                    <span>Products</span>
                                    <span className="product-line_number">
                                        {productsQuantity} * $0.5
                                    </span>
                                    <span className="product-line_result">
                                        {`$${productsQuantity * 0.5}`}
                                    </span>
                                </div>
                            ) : (
                                <div
                                    className="calculator_products-line calculator-line right-column"
                                    style={{ visibility: 'hidden' }}
                                ></div>
                            )}
                            {monthlyOrders ? (
                                <div className="calculator_orders-line calculator-line right-column">
                                    <span>Orders</span>
                                    <span className="order-line_number">
                                        {monthlyOrders} * $0.25
                                    </span>
                                    <span className="order-line_result">
                                        {`$${monthlyOrders * 0.5}`}
                                    </span>
                                </div>
                            ) : (
                                <div
                                    className="calculator_orders-linecalculator-line right-column"
                                    style={{ visibility: 'hidden' }}
                                ></div>
                            )}
                            <div className="calculator_package-line calculator-line right-column">
                                <span>Package</span>
                                <span>Premium</span>
                                <span>$60</span>
                            </div>
                            {accountingChecked ? (
                                <div className="calculator_accounting-line calculator-line right-column">
                                    <span>Accounting</span>
                                    <span>$35</span>
                                </div>
                            ) : (
                                <div
                                    className="calculator_accounting-line calculator-line right-column"
                                    style={{ visibility: 'hidden' }}
                                ></div>
                            )}

                            {terminalChecked ? (
                                <div className="calculator_terminal-line calculator-line right-column">
                                    <span>Terminal</span>
                                    <span>$5</span>
                                </div>
                            ) : (
                                <div
                                    className="calculator_terminal-line calculator-line right-column"
                                    style={{ visibility: 'hidden' }}
                                ></div>
                            )}

                            <div className="total_line calculator-line right-column">
                                <span>Total:</span>
                                <span className="total-sum">20 * $0.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
