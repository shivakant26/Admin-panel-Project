import React from "react";
import { Accordion, Button, Col, Container, Dropdown, Form, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsPlusLg } from 'react-icons/bs';


const BusinessEntity = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // dispatch(getUserDetailsAction(data))
        console.log(data);
    }
    return (
        <div className="admin-wrapper">
            {/* <h2>Business Entity component</h2> */}
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Business Entity</Accordion.Header>
                    <Accordion.Body>
                        {/* <h3>Accodian</h3> */}
                        <div className='admin-section'>
                            {/* <h2 className='admin-title'>User Form</h2> */}
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-4 form-main">
                                            <Form.Label>Entity Legal Name</Form.Label>
                                            <span className='error'>
                                                {errors?.entityLegalName?.type === "required" && <p>*</p>}
                                            </span>
                                            <Form.Control type="text"
                                                {...register("entityLegalName", { required: true, })}
                                                placeholder="ex: Entity Legal Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Short Name</Form.Label>
                                            <Form.Control type="text" {...register("entityShortName")} placeholder="ex: My_Entity" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Home Country</Form.Label>
                                            <Form.Control type="text" {...register("homeCountry")} placeholder="ex: abc" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Start FY</Form.Label>
                                            <Form.Control type="date" {...register("entityStartFy")} placeholder="ex: Date-Month" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity End FY</Form.Label>
                                            <Form.Control type="date" {...register("entityEndFy")} placeholder="ex: Date-Month" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Base Currency</Form.Label>
                                            <Form.Control type="text" {...register("baseCurrency")} placeholder="ex: $" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Host Name</Form.Label>
                                            <Form.Control type="text" {...register("entityHostName")} placeholder="ex: Entity_Host_name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Host Port</Form.Label>
                                            <Form.Control type="number" {...register("entityHostPort")} placeholder="ex: 4040" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Address</Form.Label>
                                            <Form.Control type="text" {...register("entityAddress")} placeholder="ex: Entity_Address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Type</Form.Label>
                                            <Form.Control type="text" {...register("entityType")} placeholder="ex: Entity_Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Pin Code</Form.Label>
                                            <Form.Control type="number" {...register("pinCode")} placeholder="ex: 1234" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity State</Form.Label>
                                            <Form.Control type="text" {...register("entityState")} placeholder="ex: Entity_State" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Rating Agency</Form.Label>
                                            <Form.Control type="text" {...register("ratingAgency")} placeholder="ex: Rating_Agency" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control type="text" {...register("rating")} placeholder="ex: first" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Income Tax Identification Number</Form.Label>
                                            <Form.Control type="text" {...register("incomeTaxIdentificationNumber")} placeholder="ex: Income Tax Iden..." />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>TDS/WHT Rate Applicable</Form.Label>
                                            <Form.Control type="number" {...register("tdsRateApplicable")} placeholder="ex: TDS/WHT Rate" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4" {...register("status")}>
                                            <Form.Label>Status</Form.Label>
                                            <div className="status-check">
                                            <Form.Check
                                                inline
                                                label="Active"
                                                name="status"
                                                type="radio"
                                                id='1'
                                            />
                                            <Form.Check
                                                inline
                                                label="Inactive"
                                                name="status"
                                                type="radio"
                                                id='2'
                                            />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="form-actions">
                                            <Button type="submit" className='admin-page-btn'>Submit</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <hr />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Entity Email List</Accordion.Header>
                    <Accordion.Body>
                        {/* <h3>Accodian</h3> */}
                        <div className='admin-section'>
                            {/* <h2 className='admin-title'>User Form</h2> */}
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-4 form-main">
                                            <Form.Label>Email</Form.Label>
                                            <span className='error'>
                                                {errors?.email?.type === "required" && <p>*</p>}
                                            </span>
                                            <Form.Control type="text"
                                                {...register("email", { required: true, })}
                                                placeholder="ex: JohnDoe@gmail.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Salutation</Form.Label>
                                            <Form.Control type="text" {...register("salutation")} placeholder="ex: Salutation" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity ID</Form.Label>
                                            <Form.Control type="text" {...register("entityId")} placeholder="ex: Entity_Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Claim </Form.Label>
                                            <Form.Control type="text" {...register("claim")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Underwriting</Form.Label>
                                            <Form.Control type="text" {...register("underwriting")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Accounting</Form.Label>
                                            <Form.Control type="text" {...register("accounting")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4" {...register("status")}>
                                            <Form.Label>Status</Form.Label>
                                            <div className="status-check">
                                            <Form.Check
                                                inline
                                                label="Active"
                                                name="status"
                                                type="radio"
                                                id='1'
                                            />
                                            <Form.Check
                                                inline
                                                label="Inactive"
                                                name="status"
                                                type="radio"
                                                id='2'
                                            />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="form-actions">
                                            <Button type="submit" className='admin-page-btn'>Submit</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <hr />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Calculation</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col md={4}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        field1Type
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">field1Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">operation1_2</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col md={4}>
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic">
                                        field2Type
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Field2Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Operation2_3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col md={4}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        field3Type
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">true</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">false</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            
                            <Col md={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Entity ID</Form.Label>
                                    <Form.Control type="text" {...register("EntityId")} placeholder="ex: true/false" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Tax</Accordion.Header>
                    <Accordion.Body>
                        <div className='admin-section'>
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-4 form-main">
                                            <Form.Label>Tax Name</Form.Label>
                                            <span className='error'>
                                                {errors?.taxName?.type === "required" && <p>*</p>}
                                            </span>
                                            <Form.Control type="text"
                                                {...register("taxName", { required: true, })}
                                                placeholder="ex: Tax Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Reg NO</Form.Label>
                                            <Form.Control type="text" {...register("regNo")} placeholder="ex: Reg_no" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Rate</Form.Label>
                                            <Form.Control type="number" {...register("rate")} placeholder="ex: Rate" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Calculation ID</Form.Label>
                                            <Form.Control type="text" {...register("calculationId")} placeholder="ex: Calculation_Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>TDS/WTH Tax</Form.Label>
                                            <Form.Control type="number" {...register("tdsWthTax")} placeholder="ex: TDs/WTH Tax" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsTDS_WTH Req</Form.Label>
                                            <Form.Control type="text" {...register("isTdsWthReq")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsTax Under Rev Charge</Form.Label>
                                            <Form.Control type="text" {...register("isTaxUnderRevCharge")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>isActive</Form.Label>
                                            <Form.Control type="text" {...register("isActive")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsNegative</Form.Label>
                                            <Form.Control type="text" {...register("isNegative")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity ID</Form.Label>
                                            <Form.Control type="text" {...register("entityId")} placeholder="ex: Entity_Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="form-actions">
                                            <Button type="submit" className='admin-page-btn'>Submit</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <hr />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Tax Document</Accordion.Header>
                    <Accordion.Body>
                    <div className='admin-section'>
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Document Name</Form.Label>
                                            <Form.Control type="text" {...register("regNo")} placeholder="ex: Document Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsRequired</Form.Label>
                                            <Form.Control type="number" {...register("rate")} placeholder="ex: true/false" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Start Date</Form.Label>
                                            <Form.Control type="date" {...register("calculationId")} placeholder="ex: 13/06/1998" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control type="date" {...register("tdsWthTax")} placeholder="ex: 25/06/2005" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity ID</Form.Label>
                                            <Form.Control type="text" {...register("entityId")} placeholder="ex: Entity_Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="form-actions">
                                            <Button type="submit" className='admin-page-btn'>Submit</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <hr />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default BusinessEntity;