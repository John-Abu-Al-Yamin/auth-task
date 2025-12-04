import React, { useState } from 'react'
import { formConfig } from '../config/formConfig';


const Tabs = () => {
 const tabs = Object.keys(formConfig[category]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>Tabs</div>
  )
}

export default Tabs