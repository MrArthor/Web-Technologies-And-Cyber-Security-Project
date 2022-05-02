import React from 'react';
import { Alert, Card } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div>
            <Alert variant="danger">
                <Card>
                    <Card.Body>
                        <Card.Text>Sorry You Have Entered The Wrong URL Please Click Here To Go To Our  <a href="/">HomePage</a></Card.Text>
                    </Card.Body>
                </Card>
            </Alert>
        </div>
    );
};

export default Notfound;