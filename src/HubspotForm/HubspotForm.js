import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DefaultLoading = () => <div>Loading...</div>;

export const HubspotForm = (props) => {
  const {
    portalId,
    formId,
    scriptSrc = "//js.hsforms.net/forms/shell.js",
    onLoading = <DefaultLoading />,
  } = props;

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptSrc;

    document.body.appendChild(script);
    const addListener = () => {
      window.hbspt.forms.create({
        portalId: portalId,
        formId: formId,
        target: "#hubspotform",
      });
      if(window.hbspt?.forms) setLoading(false);
    };

    script.addEventListener("load", addListener);

    return () => script.removeEventListener("load", addListener);
  }, [portalId, formId, scriptSrc]);

  return (
    <div id="hubspotform">
      { loading ? onLoading : null }
    </div>
  );
};

HubspotForm.propTypes = {
  portalId: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  scriptSrc: PropTypes.string,
  onLoading: PropTypes.object,
};

HubspotForm.defaultProps = {
  scriptSrc: "//js.hsforms.net/forms/shell.js",
};

export default HubspotForm;
