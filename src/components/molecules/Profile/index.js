import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { ProfileImg } from 'components'

const StyleProfileDesc = styled.p`
  font-size: 14px;
  text-align: justify;
`
const StyleDiv = styled.div`
  width: 300px;
  margin: 10px 30px;
`

const Profile = ({ ...props }) => (
  <StyleDiv>
    <ProfileImg {...props} />
    <StyleProfileDesc>{props.desc}</StyleProfileDesc>
  </StyleDiv>
)

Profile.propTypes = {
  src: PropTypes.string,
  desc: PropTypes.string,
}

export default Profile