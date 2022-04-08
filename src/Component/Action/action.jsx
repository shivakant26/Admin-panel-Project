import React from "react";
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form
} from 'react-bootstrap';
// import '../adminPanel.scss';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { useForm } from "react-hook-form";


const Action = () =>{
    
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (role) =>{
      console.warn("Action Data",role);
    }
    return(
        <>
            {/* <Row>
                <Col>
                    <h1 className='page-title'>Action Panel Demo</h1>
                </Col>
            </Row> */}
            <div className='admin-wrapper'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='admin-section'>
                                <h2 className='admin-title'>Action Table</h2>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Actioncode</th>
                                                <th>ActionName</th>
                                                <th>Status</th>
                                                <th>Created Date</th>
                                                <th>Expiry Date</th>
                                                <th>Actions</th>
                                                <th>Last_Op_Ind</th>
                                                <th>Updated_By</th>
                                                <th>Created_By</th>
                                                <th>Update_Date</th>
                                                <th>Created_Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {/* {
                                                getroledata.map((item,index)=>
                                            <tr key={index}>
                                                <td>{item.roleCode}</td>
                                                <td>{item.roleName}</td>
                                                <td>{item.groupId}</td>
                                                <td>{item.password}</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>{item.createdDate}</td>
                                                <td>{item.expiryDate}</td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            )
                                        } */}
                                            <tr>
                                                <td>0012</td>
                                                <td>Allie Grater</td>
                                                <td>
                                                    <span className='status inactive'>Inactive</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action edit'>
                                                        <AiFillEdit />
                                                    </Button>
                                                </td>
                                                <td>#0012</td>
                                                <td>admin</td>
                                                <td>admin</td>
                                                <td>01/01/2001</td>
                                                <td>05/05/2002</td>
                                            </tr>
                                            {/* <tr>
                                                <td>0013</td>
                                                <td>Minnie Van Ryder</td>
                                                <td>#0013</td>
                                                <td>*****</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr> */}
                                            {/* <tr>
                                                <td>0014</td>
                                                <td>Chris Anthemum</td>
                                                <td>#0014</td>
                                                <td>*****</td>
                                                <td>
                                                    <span className='status inactive'>Inactive</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action edit'>
                                                        <AiFillEdit />
                                                    </Button>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </Table>                                   
                                </div>
                                <Col md={12}>
                                        <Form.Group className="table-actions">
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>                                
                            </div>
                            <div className='admin-section'>
                                <h2 className='admin-title'>Action Form</h2>
                                <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Action Code</Form.Label>
                                                <Form.Control type="text" 
                                                {...register("actionCode",{required: true,})} 
                                                placeholder="ex: #0012" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Action Name</Form.Label>
                                                <Form.Control type="text" {...register("actionName")} placeholder="ex: Action_Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>canCreate</Form.Label>
                                                <Form.Control type="text" {...register("canCreate")} placeholder="ex: true/false" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>canUpdate</Form.Label>
                                                <Form.Control type="text" {...register("canUpdate")} placeholder="ex: true/false" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>canDelete</Form.Label>
                                                <Form.Control type="text" {...register("canDelete")} placeholder="ex: true/false" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>canRead</Form.Label>
                                                <Form.Control type="text" {...register("canRead")} placeholder="ex: true/false" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Last_Op_Ind</Form.Label>
                                                <Form.Control type="text" {...register("lastOptionIndex")} placeholder="ex: Last_op_Ind" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Updated_By</Form.Label>
                                                <Form.Control type="text" {...register("updatedBy")} placeholder="ex: Updated_By" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created_By</Form.Label>
                                                <Form.Control type="text" {...register("createBy")} placeholder="ex: Created_By" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Update_Date</Form.Label>
                                                <Form.Control type="date" {...register("updateDate")} placeholder="ex: 21/09/2004" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created_Date</Form.Label>
                                                <Form.Control type="date" {...register("createdDate")} placeholder="ex: 22/11/2004" />
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Action;