const SET_VERIFIED = 'verifiedTeacher/SET_VERIFIED';
const SET_VERIFIED_RESOURCES = 'verifiedTeacher/SET_VERIFIED_RESOURCES';

export const setVerified = () => ({type: SET_VERIFIED});
export const setVerifiedResources = hasVerifiedResources => ({
  type: SET_VERIFIED_RESOURCES
});

const initialState = {
  isVerified: false,
  // True if a page (course/script) has resources that are only available to
  // verified teachers
  hasVerifiedResources: false,
  verficationCheckComplete: false
};

export default function verifiedTeacher(state = initialState, action) {
  if (action.type === SET_VERIFIED) {
    return {
      ...state,
      isVerified: true
    };
  }

  if (action.type === SET_VERIFIED_RESOURCES) {
    return {
      ...state,
      hasVerifiedResources: true
    };
  }

  return {
    ...state,
    verificationCheckComplete: true
  };
}
