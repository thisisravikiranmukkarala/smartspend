import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Calculator() {
    const [monthlySalary, setMonthlySalary] = useState('');
    const [allocation, setAllocation] = useState(null);

    const calculateAllocation = () => {
        const expenseRatio = 0.67; // 70%
        const investingSavingRatio = 0.23; // 20%
        const shortTermDesiresRatio = 0.10; // 10%

        const expense = Math.floor(monthlySalary * expenseRatio);
        const investingSaving = Math.floor(monthlySalary * investingSavingRatio);
        const shortTermDesires = Math.floor(monthlySalary * shortTermDesiresRatio);

        setAllocation({
            expense: expense,
            investingSaving: investingSaving,
            shortTermDesires: shortTermDesires
        });
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <Form>
                        <Form.Group controlId="formMonthlySalary">
                            <Form.Label>Enter Your Monthly Salary</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter monthly salary"
                                value={monthlySalary}
                                onChange={(e) => setMonthlySalary(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={calculateAllocation}>
                            Calculate
                        </Button>
                    </Form>
                </Col>
            </Row>
            {allocation && (
                <Row className="mt-3">
                    <Col>
                        <h3>Smart Spend:</h3>
                        <p><strong>Expense like EMI, RENT, BILLS, FOOD etc..,  :</strong> {allocation.expense}</p>
                        <p><strong>Investing & Savings like buying stocks, gold, buying courses etc..,  :</strong> {allocation.investingSaving}</p>
                        <p><strong>Short Term Desires, trips, bucket list items, parties etc..,  :</strong> {allocation.shortTermDesires}</p>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Calculator;
