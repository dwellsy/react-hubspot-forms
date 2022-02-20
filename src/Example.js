import React, { useState } from 'react'
import { HubspotForm } from './HubspotForm';

export const Example = () => {

  const [ portalId, setPortalId ] = useState('');
  const [ formId, setFormId ] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={portalId} 
        onChange={e => setPortalId(e.target.value)}
        placeholder="enter portal ID here" 
      />

      <input 
        type="text" 
        value={formId} 
        onChange={e => setFormId(e.target.value)}
        placeholder="enter form ID here" 
      />

      { (portalId && formId) && <HubspotForm portalId={portalId} formId={formId}/> }
    </div>
  )
}

export default Example;
