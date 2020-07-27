import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');

const { Option } = Select;

const validateMessages = {
  required: "'${Registration Number}' is required!",
  
};

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
  return (
    <>
      <Form validateMessages={validateMessages}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 18,
        }}
       
      >
       
        <Form.Item label="Registration Number">
        
          <Input 
          style={{ width: 400}} 
          
          placeholder="Enter Registration Number"/>
          
        </Form.Item>
        <Form.Item label="Registraion Council">
          <Select
          showSearch
          style={{ width: 400 }}
          placeholder="Select a Medical Council"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Andhra Pradesh Medical Council">Andhra Pradesh Medical Council</Option>
            <Option value="Arunachal Pradesh Medical Council">Arunachal Pradesh Medical Council</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Registraion Year">
          <Select 
          showSearch
          style={{ width: 400 }}
          placeholder="Select Registration Year"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="2020">2020</Option>
            <Option value="2019">2019</Option>
          </Select>
        </Form.Item>

        <Form.Item className="container-back">
          <Button type="primary" name="Back" style={{width: 100}}>Back</Button>
          
        </Form.Item>
       
        <Form.Item className="container-submit">
          <Button type="primary" name="Back" style={{width: 100}}>Submit</Button>
         
        </Form.Item>
       
      </Form>
    </>
  );
};

export default FormSizeDemo;
