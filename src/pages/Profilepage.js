import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Profilepage() {
    // Dummy user data
    const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "Frontend Developer | React Enthusiast",
        location: "New York, USA",
        joinDate: "January 2024",
        profileImage: "https://via.placeholder.com/150",
        stats: {
            posts: 42,
            followers: 1234,
            following: 567
        }
    }

    return (
        <Container className="py-5">
            <Card className="border-0 shadow">
                <Card.Body>
                    <Row>
                        <Col md={4} className="text-center">
                            <Image 
                                src={userData.profileImage} 
                                roundedCircle 
                                className="mb-3"
                                width={150}
                                height={150}
                            />
                            <h3>{userData.name}</h3>
                            <p className="text-muted">{userData.bio}</p>
                        </Col>
                        <Col md={8}>
                            <Row className="mb-3">
                                <Col sm={4}>
                                    <Card className="text-center p-3">
                                        <h4>{userData.stats.posts}</h4>
                                        <span>Posts</span>
                                    </Card>
                                </Col>
                                <Col sm={4}>
                                    <Card className="text-center p-3">
                                        <h4>{userData.stats.followers}</h4>
                                        <span>Followers</span>
                                    </Card>
                                </Col>
                                <Col sm={4}>
                                    <Card className="text-center p-3">
                                        <h4>{userData.stats.following}</h4>
                                        <span>Following</span>
                                    </Card>
                                </Col>
                            </Row>
                            <Card className="p-3">
                                <h4>Profile Info</h4>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <p><strong>Location:</strong> {userData.location}</p>
                                <p><strong>Joined:</strong> {userData.joinDate}</p>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Profilepage
