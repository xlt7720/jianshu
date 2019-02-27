import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
 } from './style';

class Header extends Component {
  render(){
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={this.props.focused}
             classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''}
              onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className="iconfont">&#xe6be;</span>
            写文章
          </Button>
          <Button className='reg'>注册</Button>          
        </Addition>
      </HeaderWrapper>
    )
  }  
}

const mapStateToProps = (state)=> {
  return {
    focused: state.focused
  }
}

const mapDispatchProps = (dispatch)=> {
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      }
      dispatch(action);
    },
    handleInputBlur(){
      const action = {
        type: 'search_blue'
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(Header);