import React from "react";
import moment from "moment";
import { Button, Card, Form, DatePicker, Select } from "antd";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;

const FilterGroup = ({ onFilter }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (values.rangePicker) {
      values.rangePicker = values.rangePicker.map((date) =>
        moment(date).format("MMMM D, YYYY h:mm A")
      );
    }
    onFilter(values);
  };

  const onClear = () => {
    form.resetFields();
    onFilter({});
  };

  return (
    <Card
      className="filter-group-card"
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <Form
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        className="filter-form"
      >
        <div className="filter-form-items">
          <Form.Item label="Username" name="username">
            <Select
              placeholder="Select username"
              style={{ width: "200px" }}
              allowClear
            >
              {/* Placeholder for username options */}
            </Select>
          </Form.Item>

          <Form.Item label="Action" name="select">
            <Select
              placeholder="Select action"
              style={{ width: "200px" }}
              allowClear
            >
              {/* Placeholder for action options */}
            </Select>
          </Form.Item>

          <Form.Item label="Date Range" name="rangePicker">
            <RangePicker style={{ width: "300px" }} />
          </Form.Item>
        </div>

        <div className="filter-form-buttons">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                marginRight: "10px",
              }}
            >
              Filter
            </Button>
            <Button
              type="default"
              onClick={onClear}
              icon={<ClearOutlined />}
              style={{
                backgroundColor: "#ff4d4f",
                borderColor: "#ff4d4f",
                color: "white",
              }}
            >
              Clear
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};

export default FilterGroup;
