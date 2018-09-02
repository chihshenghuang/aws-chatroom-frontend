import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { ProfileImg } from 'components'

const StyleProfileTitle = styled.div`
  margin: 20px 0px;
  font-size: 24px;
  color: #3B3939
`
const StyleProfileDesc = styled.p`
  font-size: 16px;
  text-align: justify;
`
const StyleDiv = styled.div`
  width: 400px;
  margin: 10px 10px;
`

const Profile = ({ ...props }) => (
  <StyleDiv>
    {/*<ProfileImg {...props} />*/}
    <StyleProfileTitle>{props.title}</StyleProfileTitle>
    <StyleProfileDesc>{props.desc}</StyleProfileDesc>
  </StyleDiv>
)

Profile.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Profile
