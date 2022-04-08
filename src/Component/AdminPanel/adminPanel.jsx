import { React, useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form
} from 'react-bootstrap';
import './adminPanel.scss';
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetailsAction } from '../../Redux/Action/adminAction';


const AdminPanel = () => {
    const dispatch = useDispatch();
    const [ searchText , setSearchText ] = useState("");
    const getNewUser = useSelector((state)=>state.AdminReducer.data);
    // console.log("apidata",getNewUser);
    const [ List , setList ] = useState(getNewUser);
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        dispatch(getUserDetailsAction(data))
    }
    const search = (e) =>{
        const searchText = e.target.value;
        let filterdata = getNewUser.filter((el)=>{
            return el.username.toLowerCase().includes(searchText.toLowerCase()) ||
                   el.email.toLowerCase().includes(searchText.toLowerCase())
        })
        setList(filterdata);
        // console.warn("click",filterdata);
    }
    useEffect(()=>{
        if(getNewUser){
            setList(getNewUser)
        }
    },[getNewUser])
    return (
        <>
            {/* <Row>
                <Col>
                    <h1 className='page-title'>Admin Panel Demo</h1>
                </Col>
            </Row> */}
            <div className='admin-wrapper'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='admin-section'>
                                <div className='admin-header'>
                                    <h2 className='admin-title'>User Table</h2>
                                    <div className='search'>
                                        <input type="text" placeholder='Search'
                                        // value={searchText} 
                                        onChange={search}/>
                                        <AiOutlineSearch />
                                    </div>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Group ID</th>
                                                <th>Password</th>
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
                                            {
                                                List.map((item,index)=>
                                            <tr key={index}>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
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
                                        }
                                            {/* <tr>
                                                <td>Allie Grater</td>
                                                <td>#0012</td>
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
                                            {/* <tr>
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
                            <div className='admin-section admin-section-page'>
                                <h2 className='admin-title'>User Form</h2>
                                <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-4 form-main">
                                                <Form.Label>User Name</Form.Label>
                                                <span className='error'>
                                                {errors?.userName?.type === "required" && <p>*</p>}
                                                </span>
                                                <Form.Control type="text" 
                                                {...register("userName",{required: true,})} 
                                                placeholder="ex: John Doe" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="Email" {...register("email")} placeholder="ex: Johndoe@gmail.com" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Group ID</Form.Label>
                                                <Form.Control type="text" {...register("groupId")} placeholder="ex: abc" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" {...register("password")} placeholder="ex: Password" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created Date</Form.Label>
                                                <Form.Control type="date" {...register("createdDate")} placeholder="ex: 25/12/2021" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Expiry Date</Form.Label>
                                                <Form.Control type="date" {...register("expiryDate")} placeholder="ex: 25/12/2021" />
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
                                                <div className='status-check'>
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

export default AdminPanel;