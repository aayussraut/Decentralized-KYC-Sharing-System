import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const KycContext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const KycContract = new ethers.Contract(contractAddress, contractABI, signer);
  return KycContract;
};

export const KycProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [checkBankRequest, setCheckBankRequest] = useState(false);
  const [userKYC, setUserKYC] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [requested, setRequested] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    id_type: "",
    id_no: "",
    gender: "",
    marital_status: "",
    caste: "",
    religion: "",
    profession: "",
    phone_number: "",
    state: "",
    district: "",
    local_level: "",
    ward_no: "",
    village_tole: "",
    house_no: "",
    temp_state: "",
    temp_house_no: "",
    temp_district: "",
    temp_local_level: "",
    temp_ward_no: "",
    temp_village_tole: "",
    father_first_name: "",
    father_middle_name: "",
    father_last_name: "",
    mother_first_name: "",
    mother_middle_name: "",
    mother_last_name: "",
    spouse_first_name: "",
    spouse_middle_name: "",
    spouse_last_name: "",
    grandfather_first_name: "",
    grandfather_middle_name: "",
    grandfather_last_name: "",
    grandmother_first_name: "",
    grandmother_middle_name: "",
    grandmother_last_name: "",
  });


  const handleChange = (input) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [input]: e.target.value,
    }));
  };

  const handleChange2 = (e) => {
    setUserAddress(e.target.value);
    console.log(e.target.value);
    setUserKYC({})

    // ask the user with the address to allow the app to access their data if the user allows the app to access their data, then we can get the data if the user denies the app to access their data, then we can't get the data
  };

  //checks if metamask is installed and set the 1st account as default account
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask to continue");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask to continue");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      }); //get all accounts
      setCurrentAccount(accounts[0]); //set the 1st account as default account
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  };

  const storeData = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask to continue");
      const KycContract = getEthereumContract();
      const transactionHash = await KycContract.storeFormData(formData);
      setIsLoading(true);
      console.log(`Transation Hash: ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Transation Hash: ${transactionHash.hash}`);
    } catch (error) {
      console.log(error);
    }
  };
  const change2object = (arr) => {
    const obj = {
      first_name: arr[0],
      middle_name: arr[2],
      last_name: arr[1],
      dob: arr[3],
      id_type: arr[4],
      id_no: arr[5],
      gender: arr[6],
      marital_status: arr[7],
      caste: arr[8],
      religion: arr[9],
      profession: arr[10],
      phone_number: arr[11],
      state: arr[12],
      district: arr[13],
      local_level: arr[14],
      ward_no: arr[15],
      village_tole: arr[16],
      house_no: arr[17],
      temp_state: arr[18],
      temp_house_no: arr[29],
      temp_district: arr[20],
      temp_local_level: arr[21],
      temp_ward_no: arr[22],
      temp_village_tole: arr[23],
      father_first_name: arr[24],
      father_middle_name: arr[25],
      father_last_name: arr[26],
      mother_first_name: arr[27],
      mother_middle_name: arr[28],
      mother_last_name: arr[29],
      spouse_first_name: arr[30],
      spouse_middle_name: arr[31],
      spouse_last_name: arr[32],
      grandfather_first_name: arr[33],
      grandfather_middle_name: arr[34],
      grandfather_last_name: arr[35],
      grandmother_first_name: arr[36],
      grandmother_middle_name: arr[37],
      grandmother_last_name: arr[38],
    };
    return obj;
  };

  const getOwnData = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask to continue");
      const formContract = getEthereumContract();
      const data = await formContract.getOwnData();
      // console.log(data);
      const obj = change2object(data);
      // console.log(obj);
      localStorage.setItem("KYC", JSON.stringify(obj));
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      // console.log(userAddress);
      if (!ethereum) return alert("Please install MetaMask to continue");
      const formContract = getEthereumContract();
      const data = await formContract.getFormData(userAddress);
      console.log(data);
      const obj = change2object(data);
      console.log("obj:", obj);
      setUserKYC(obj);
      // localStorage.setItem("KYC", JSON.stringify(obj));
      // return obj;
    } catch (error) {
      console.log(error);
    }
  };

  const requestData = async () => {
    try {
      // console.log(userAddress);
      if (!ethereum) return alert("Please install MetaMask to continue");
      const formContract = getEthereumContract();
      formContract.on("requested", (status) => {
        console.log("status:", status); //flase
        setRequested(!status); //access grant xa bhane requested false hunxa nabhaye true hunxa
        if (status) {
          getUserData();
        }
      }
      )
      // console.log("here????");
      console.log(formContract);
      const isGranted = await formContract.requestDataAccess(userAddress);
      // console.log(data);
      setIsLoading(true);
      console.log("here????");

      await isGranted.wait();
      setIsLoading(false);
      // console.log(isGranted);

      console.log("requested:", requested);//true
      console.log("Transaction Successful");
    }
    catch (error) {
      console.log(error);
    }

  };

  const checkRequest = async () => {
    const formContract = getEthereumContract();
    const value = await formContract.getIsAsking();
    // setIsLoading(true);

    setCheckBankRequest(value[0]);
    setBankAddress(value[1]);
    // console.log(bankAddress);
  };

  const grantAccess = async () => {
    const formContract = getEthereumContract();
    const transactionHash = await formContract.allowAccess(bankAddress);
    setIsLoading(true);
    console.log(`Transation Hash: ${transactionHash.hash}`);
    await transactionHash.wait();
    setIsLoading(false);
    console.log("Transaction Successful");
    isAsking = false;
  };

  const denyAccess = async () => {
    const formContract = getEthereumContract();
    const transactionHash = await formContract.revokeAccess(bankAddress);
    setIsLoading(true);
    console.log(`Transation Hash: ${transactionHash.hash}`);
    await transactionHash.wait();
    setIsLoading(false);
    console.log("Transaction Successful");
    isAsking = false;
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    connectWallet();
  }, []);

  return (
    <KycContext.Provider
      value={{
        formData,
        userKYC,
        setFormData,
        handleChange,
        storeData,
        handleChange2,
        getUserData,
        checkRequest,
        requestData,
        getOwnData,
        checkBankRequest,
        grantAccess,
        denyAccess,
        isLoading,
        requested
      }}
    >
      {children}
    </KycContext.Provider>
  );
};
