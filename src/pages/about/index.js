import React from 'react'
import Layout from '../../layout/layout'


const AboutPage = () => {
  return (
    <Layout pageInfo={{ name: "", desc: "" }}>
      <div className='flex flex-col px-11 divide-y max-w-6xl mx-auto'>
        <div className='flex justify-between my-8'>
          <h1 className='text-4xl font-semibold'>About BrandIndex</h1>
          <button className='px-10 py-2 bg-app-blue text-white rounded-sm'>
            Contact us
          </button>
        </div>
        <div className='flex flex-col py-8 gap-4'>

          <div className='text-gray-500 gap-3 flex flex-col'>
            <h2 className='text-black text-3xl font-semibold'>Overview</h2>
            <p className='text-sm'>BrandIndex is a marketing effectiveness tool that enables marketing teams to understand how their brand is positioned, perceived and progressing through the eyes of their target audience. It provides high-level insights into a brand's health by benchmarking and tracking key measures such as brand awareness, consideration, market share and Net Promoter Score.</p>
            <p className='text-sm'>The independent and third-party nature of BrandIndex enables marketing teams to access these insights across both their own brand but also across their competitive landscape to provide results in context to other brands in the market.</p>
          </div>
          <div className='text-gray-500 gap-3 flex flex-col'>
            <h2 className='text-black text-3xl font-semibold'>Approach</h2>
            <p className='text-sm'>BrandIndex is derived from a regular six-monthly survey of 400 respondents which asks participants to answer a range of questions relating to their relationship with each of the listed brands. Each survey contains a list of selected brands and invites participants across Momentum Media's network of audiences to complete the survey.</p>
          </div>
          <div className='text-gray-500 gap-3 flex flex-col'>
            <h2 className='text-black text-3xl font-semibold'>About Momentum Intelligence</h2>
            <p className='text-sm'>Momentum Intelligence is a market research and analytics firm based in Sydney. Our deep understanding of business audiences coupled with our robust research methodologies enables us to producedynamic market intelligence from the source to guide informed decision-making.</p>
            <p className='text-sm'>Momentum Intelligence was established in 2008 and is a trusted research partner that conducts research to deliver brand insights, competitive analysis, industry thought-leadership and more to Australia’s professional services, financial services,property, defence industry and aviation sectors.</p>
            <p className='text-sm'>Momentum Intelligence is trusted by a range of large financial institutions, leading business software providers and media outlets to uncover meaningful and actionable insights thatenable them to drive growth, connect with their stakeholders and create meaningful relationships.</p>
          </div>
          <div className='text-gray-500 gap-3 flex flex-col'>
            <h2 className='text-black text-3xl font-semibold'>Contact us</h2>
            <p className='text-sm'>Email: info@momentumintelligence.com.au<br />
              Phone: (02) 9922 3300</p>
          </div>
        </div>
        <div className='flex justify-between text-gray-500 py-4'>
          <p className='text-sm'>© Copyright Momentum Intelligence. All rights reserved</p>
          <p className='text-sm'>Powered by Momentum Intelligence</p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage