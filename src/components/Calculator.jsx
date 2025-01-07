import React, { useState, useRef } from 'react';

function Calculator() {
    const [productsQuantity, setProductsQuantity] = useState('');
    const [monthlyOrders, setMonthlyOrders] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [accountingChecked, setAccountingChecked] = useState(false);
    const [terminalChecked, setTerminalChecked] = useState(false);
    const [open, setOpen] = useState(false);

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
                            <div
                                className={
                                    open
                                        ? 'calculator_select open'
                                        : 'calculator_select'
                                }
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                <div className="input_package left-colmun">
                                    Choose package
                                </div>
                                <ul className="select_options">
                                    {['Basic', 'Professional', 'Premium'].map(
                                        (pkg) => (
                                            <li
                                                key={pkg}
                                                className={`select_option-${pkg.toLowerCase()} left-colmun`}
                                                onClick={() =>
                                                    setSelectedPackage(pkg)
                                                }
                                            >
                                                {pkg}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="checkbox_box left-colmun">
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="accounting"
                                    checked={accountingChecked}
                                    onChange={(e) =>
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
                                    onChange={(e) =>
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
                                <div className="calculator-line right-column">
                                    <span>Products</span>
                                    <span>{productsQuantity} * $0.5</span>
                                    <span>
                                        {`$${(productsQuantity * 0.5).toFixed(
                                            2
                                        )}`}
                                    </span>
                                </div>
                            ) : (
                                <div className="calculator-line right-column hidden"></div>
                            )}
                            {monthlyOrders ? (
                                <div className="calculator-line right-column">
                                    <span>Orders</span>
                                    <span>{monthlyOrders} * $0.25</span>
                                    <span>
                                        {`$${(monthlyOrders * 0.25).toFixed(
                                            2
                                        )}`}
                                    </span>
                                </div>
                            ) : (
                                <div className="calculator-line right-column hidden"></div>
                            )}

                            {selectedPackage ? (
                                <div className="calculator-line right-column">
                                    <span>Package</span>
                                    <span>{selectedPackage}</span>
                                    <span>
                                        {selectedPackage === 'Basic'
                                            ? '$0'
                                            : selectedPackage === 'Professional'
                                            ? '$40'
                                            : '$60'}
                                    </span>
                                </div>
                            ) : (
                                <div className="calculator-line right-column hidden"></div>
                            )}

                            {accountingChecked ? (
                                <div className="calculator-line right-column">
                                    <span>Accounting</span>
                                    <span>$35</span>
                                </div>
                            ) : (
                                <div className="calculator-line right-column hidden"></div>
                            )}

                            {terminalChecked ? (
                                <div className="calculator-line right-column">
                                    <span>Terminal</span>
                                    <span>$5</span>
                                </div>
                            ) : (
                                <div className="calculator-line right-column hidden"></div>
                            )}

                            {productsQuantity ||
                            monthlyOrders ||
                            selectedPackage ||
                            accountingChecked ||
                            terminalChecked ? (
                                <div className="calculator-line right-column">
                                    <span>Total:</span>
                                    <span>
                                        $
                                        {productsQuantity * 0.5 +
                                            monthlyOrders * 0.25 +
                                            (selectedPackage === 'Professional'
                                                ? 40
                                                : selectedPackage === 'Premium'
                                                ? 60
                                                : 0) +
                                            (accountingChecked ? 35 : 0) +
                                            (terminalChecked ? 5 : 0)}
                                    </span>
                                </div>
                            ) : (
                                <div className="calculator-line right-column hidden"></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
