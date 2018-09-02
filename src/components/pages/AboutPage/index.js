import React from 'react'
import { Profile, Label } from 'components'
import styled from 'styled-components'

const ProfileContainer = styled.div`
	margin: 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
`

const AboutPage = () => {
  return (
    <div>
			<p>Our Team</p>
			<ProfileContainer>
				<Profile
					src="/images/profile1.jpeg"
					desc="Chief Executive Officer Eliot is the Chief Executive Officer and Co-founder at Kloudless.
						He leads the company in its mission to make it easy for developers to build integrations.
						Eliot’s earlier experiences include product management roles at Check Point Software and Blackberry.
						Eliot attended the University of California, Berkeley,
						graduating with degrees in Mathematics, Economics, and three additional minors."
				/>
				<Profile
					src="/images/profile2.jpeg"
					desc="Chief Executive Officer Eliot is the Chief Executive Officer and Co-founder at Kloudless.
						He leads the company in its mission to make it easy for developers to build integrations.
						Eliot’s earlier experiences include product management roles at Check Point Software and Blackberry.
						Eliot attended the University of California, Berkeley,
						graduating with degrees in Mathematics, Economics, and three additional minors."
				/>
				<Profile
					src="/images/profile3.jpeg"
					desc="Chief Executive Officer Eliot is the Chief Executive Officer and Co-founder at Kloudless.
						He leads the company in its mission to make it easy for developers to build integrations.
						Eliot’s earlier experiences include product management roles at Check Point Software and Blackberry.
						Eliot attended the University of California, Berkeley,
						graduating with degrees in Mathematics, Economics, and three additional minors."
				/>
				<Profile
					src="/images/profile3.jpeg"
					desc="Chief Executive Officer Eliot is the Chief Executive Officer and Co-founder at Kloudless.
						He leads the company in its mission to make it easy for developers to build integrations.
						Eliot’s earlier experiences include product management roles at Check Point Software and Blackberry.
						Eliot attended the University of California, Berkeley,
						graduating with degrees in Mathematics, Economics, and three additional minors."
				/>
				<Profile
      		src="/images/profile1.jpeg"
        	desc="Chief Executive Officer Eliot is the Chief Executive Officer and Co-founder at Kloudless.
       	 		He leads the company in its mission to make it easy for developers to build integrations.
         		Eliot’s earlier experiences include product management roles at Check Point Software and Blackberry.
         		Eliot attended the University of California, Berkeley,
         		graduating with degrees in Mathematics, Economics, and three additional minors."
      	/>
			</ProfileContainer>
    </div>
  )
}

export default AboutPage
