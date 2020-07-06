import React from "react";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

const appearDuration = 500;
const transitionName = `example`;

const Container = styled.img`
        

        &.${transitionName}-appear {
            opacity: 0.01;
        }

        &.${transitionName}-appear-active {
            opacity: 1;
            transition: opacity ${appearDuration}ms ease-out;
        }`;

export default  () => {

    return (
        <CSSTransitionGroup
            transitionName={transitionName}
            transitionAppear={true}
            transitionAppearTimeout={appearDuration}>
            <Container src={"GG"} >
            
            </Container>
            
        </CSSTransitionGroup>
    );
};