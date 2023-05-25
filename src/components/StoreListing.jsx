import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    margin-top: 280px;
    text-align: center;
`

const StyledRow = styled(Row)`
    border-bottom: 1px solid #e8e9eb;
    display: flex;
    justify-content: space-evenly;
`

const CircleDiv = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${props => props.color || 'red'};
    border: 1px solid red;
    border-radius: 100%;
`
const HorizontalRow = styled(Row)`
    flex-direction: row;
`

const stores = ['Aldi', 'Ralph\'s', 'Nobles', '7-11', 'WinCo', 'Smith\'s'];

const storesMap = stores.map((storeName, key) => {
    return <Row HorizontalRow key={key}>
        <Col xs='.5'>
            <CircleDiv />
        </Col>
        <Col>
            <h5 style={{fontWeight: 'bold'}}>
                {storeName}
            </h5>
            <p>
                Delivery and Pickup
            </p>
        </Col>
    </Row>
})

export default function StoreListing() {
    return <StyledContainer>
        <StyledRow>
            {storesMap}
        </StyledRow>
    </StyledContainer>
}