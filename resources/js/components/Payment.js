import React from "react";
import Button from "react-bootstrap/Button";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from "mdbreact";

const Payment = props => {
    return (
        <div style={{ paddingTop: 1 }}>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Payment
            </h2>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="5">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <h5>Your information</h5>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Full name"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Phone number"
                                            icon="phone"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Your address"
                                            icon="map-marker-alt"
                                            group
                                            type="textarea"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="5">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <h5>Payment information</h5>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Credit card number"
                                            icon="credit-card"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBRow>
                                            <MDBCol md="4">
                                                <MDBInput
                                                    label="CVV"
                                                    group
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                            </MDBCol>
                                            <MDBCol md="4">
                                                <MDBInput
                                                    label="Expire date"
                                                    group
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                            </MDBCol>
                                            <MDBCol md="4">
                                                <MDBInput
                                                    label="Postal code"
                                                    group
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <h4>Total amount : {props.amount} MAD</h4>
                                    <div className="text-center py-4 mt-3">
                                        <Button
                                            style={{
                                                fontSize: 14,
                                                borderRadius: 15
                                            }}
                                            variant="primary"
                                        >
                                            Pay now
                                        </Button>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="1"></MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Payment;
