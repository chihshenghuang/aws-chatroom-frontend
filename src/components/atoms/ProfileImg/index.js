import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const StyleProfileImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`

const ProfileImg = ({ ...props }) => (
    <StyleProfileImg src={props.src} />
)

ProfileImg.propTypes = {
    src: PropTypes.string,
}

export default ProfileImg
