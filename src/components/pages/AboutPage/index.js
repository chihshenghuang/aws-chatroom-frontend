import React from 'react'
import { Profile, ProfileImg, Label } from 'components'
import { AboutTemplate, Header } from 'components'
import styled from 'styled-components'

const ProfileContainer = styled.div`
	margin: 30px;	
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	background: rgb(255,255,255,0.8);
	border-radius: 30px;
	width: 800px;
	height: 500px;
	overflow: auto;
	color: #585354;
	line-height: 150%;
`
const AboutPage = () => {
	return (
		<AboutTemplate
			header={<Header
				title="About author"
				icon="left-arrow"
				iconLink={history.back}
			/>}
		>
			<ProfileContainer>
				<ProfileImg src="/images/photo.JPG" />
				<Profile
					title="About Chih-Sheng Huang"
					desc=
					"Chih Sheng is an enthusiastic software engineer with more than 2.5 years
					of experience in custom application development such as Web application development
					and Mobile Apps development.Previously employed at Change Healthcare,
which is one of the largest healthcare technology companies in the United States,
Chih Sheng participated the medical payment system development as a front-end developer.
He is primarily focused on building web application by integrating various modern technologies
and frameworks such as React,Redux, Express, WebPack, Node.js and AWS,
also he using CI/CD tools like Jenkins and Gitlab to integrate auto testing and deployment.
Chih Sheng has hands-on experience in all stages of front end application development,
including requirement definition, REST APIs design, testing and support.
Now, Chih Sheng is pursuing his master degree in Scientific Computing from University of Pennsylvania."
/>
			</ProfileContainer>
		</AboutTemplate>
	)
}

export default AboutPage
