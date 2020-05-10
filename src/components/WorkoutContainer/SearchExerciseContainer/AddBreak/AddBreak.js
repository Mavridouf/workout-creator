import React from 'react';
import './AddBreak.css';
import { getBreakIndex } from '../../../../shared/helper';

class AddBreak extends React.Component {

  breakClicked = () => {
    const index = getBreakIndex(this.props.workout);
    if (index) this.props.addBreak(index);
  }

  render() {
    return (
      <div onClick={this.breakClicked} className={'add-break card-sm d-flex justify-content-between align-items-center ' + (getBreakIndex(this.props.workout) === 0 ? 'disabled' : '')}>
        <svg width="16px" height="20px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>Break</title>
          <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.2">
            <g id="Customization" transform="translate(-336.000000, -385.000000)" fill="#000000">
              <g id="achivements/upload-time" transform="translate(332.000000, 383.000000)">
                <path d="M15,2 C15.5522847,2 16,2.44771525 16,3 L16,4 C16,4.55228475 15.5522847,5 15,5 L14,5 C13.7238576,5 13.5,5.22385763 13.5,5.5 C13.5,5.8006102 13.6854111,6.0700746 13.9661769,6.17748515 C14.4189675,6.35073694 14.7670932,6.48684125 15.0105541,6.58579805 C17.9367925,7.77519302 20,10.6466525 20,14 C20,18.418278 16.418278,22 12,22 C7.581722,22 4,18.418278 4,14 C4,10.6388277 6.07284754,7.7617948 9.0099447,6.57749934 C9.24912557,6.4810569 9.59041849,6.34786206 10.0338234,6.17791482 C10.3146169,6.07029668 10.5,5.80071018 10.5,5.5 C10.5,5.22385763 10.2761424,5 10,5 L9,5 C8.44771525,5 8,4.55228475 8,4 L8,3 C8,2.44771525 8.44771525,2 9,2 L15,2 Z M12,10 C11.4477153,10 11,10.4477153 11,11 L11,11 L11,13 L9,13 C8.44771525,13 8,13.4477153 8,14 C8,14.5522847 8.44771525,15 9,15 L9,15 L10.999,15 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,17 L13,15 L15,15 C15.5522847,15 16,14.5522847 16,14 C16,13.4477153 15.5522847,13 15,13 L15,13 L13,13 L13,11 C13,10.4477153 12.5522847,10 12,10 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </g>
        </svg>
        <span>Add Break</span>
        <div className='circle d-flex justify-content-center align-items-center'>
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Combined Shape</title>
            <defs>
              <path d="M645,385 C650.522847,385 655,389.477153 655,395 C655,400.522847 650.522847,405 645,405 C639.477153,405 635,400.522847 635,395 C635,389.477153 639.477153,385 645,385 Z M645,389.5 L644.85554,389.506867 L644.714965,389.527047 C644.022851,389.660188 643.5,390.269035 643.5,391 L643.5,391 L643.5,393.5 L641,393.5 L640.85554,393.506867 C640.094888,393.579551 639.5,394.220304 639.5,395 L639.5,395 L639.506867,395.14446 C639.579551,395.905112 640.220304,396.5 641,396.5 L641,396.5 L643.5,396.5 L643.5,399 L643.506867,399.14446 C643.579551,399.905112 644.220304,400.5 645,400.5 L645,400.5 L645.14446,400.493133 C645.905112,400.420449 646.5,399.779696 646.5,399 L646.5,399 L646.5,396.5 L649,396.5 L649.14446,396.493133 C649.905112,396.420449 650.5,395.779696 650.5,395 L650.5,395 L650.493133,394.85554 C650.420449,394.094888 649.779696,393.5 649,393.5 L649,393.5 L646.5,393.5 L646.5,391 L646.493133,390.85554 C646.420449,390.094888 645.779696,389.5 645,389.5 L645,389.5 Z" id="path-1"></path>
              <filter x="-10.0%" y="-10.0%" width="120.0%" height="120.0%" filterUnits="objectBoundingBox" id="filter-2">
                <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.2 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
              </filter>
            </defs>
            <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Customization" transform="translate(-635.000000, -385.000000)">
                <g id="Combined-Shape">
                  <use fill="#1979FF" fillRule="evenodd" href="#path-1"></use>
                  <use fill="black" fillOpacity="1" filter="url(#filter-2)" href="#path-1"></use>
                </g>
              </g>
            </g>
          </svg>
        </div >
      </div >
    );
  }
}

export default AddBreak;
