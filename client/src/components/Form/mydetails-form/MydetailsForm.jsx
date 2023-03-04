export default function MyDetailsForm(props) {
  const { name, label, required, value } = props;
  const kyc = JSON.parse(localStorage.getItem("KYC"));

  return (
    <div>
      {/* {console.log(value)} */}
      {value !== "" && value !== undefined && <div className="row mb-3 col-md-12">
        <>
          <label className="col-sm-2 col-form-label">{label}</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              value={value}
              type="text"
              disabled
            />
          </div>
        </>
      </div>
      }
    </div>
  );
}
