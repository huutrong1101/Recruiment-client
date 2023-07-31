import React from 'react';
import axiosInstance from '../../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Button from "@mui/material/Button";
import { AcountInterface } from "../../services/services";

interface CardProps {
  job: AcountInterface;
}

function UserAccountDeletionButton({ job }: CardProps) {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleDeleteUser = async (id: AcountInterface) => {
    try {
      const response = await axiosInstance.delete(`admin/delete/${job.id}`);
      console.log('User account deleted successfully');
      // Perform any additional actions after successful deletion
      navigate(-1); // Use the navigate function to go back to the previous page
    } catch (error) {
      console.error('Error deleting user account:', error);
      // Handle error if the account deletion fails
    }
  };

  const handleDelete = async () => {
    const userIdAsAcountInterface: AcountInterface = job.id;
    await handleDeleteUser(userIdAsAcountInterface);
  };
  
  return (
    <Button
      onClick={handleDelete}
      autoFocus
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: "#059669",
        "&:hover": { backgroundColor: "#259972" },
      }}
    >
      Agree
    </Button>
  );
}

export default UserAccountDeletionButton;
