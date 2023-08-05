// import React from 'react'
// import axiosInstance from '../../utils/AxiosInstance';
// import { useNavigate } from 'react-router-dom';

// function DeleteQuestion({id}: any) {
//   const conf = window.confirm('Do you make sure delete this question');
//   const navigate = useNavigate()
//   if (conf) {
//     return (
//       axiosInstance.delete('interviewer/question/'+id) 
//       .then (res => {
//         alert('Question has deleted. Page will be reloaded')
//         navigate('interviewer/interview-question')
//       }).catch(err => console.log(err))
//     )
//   }

// }

// export default DeleteQuestion