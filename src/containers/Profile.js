import React from 'react';
import { Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';


class Demo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });

    }
    render() {
        const Option = Select.Option;

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="gutter-example form-demo">
                    <Card title="个人信息" bordered={false}>
                        <Form.Item
                            {...formItemLayout}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="Select"
                            hasFeedback
                        >
                            {getFieldDecorator('select', {
                                rules: [
                                    { required: true, message: 'Please select your country!' },
                                ],
                            })(
                                <Select placeholder="Please select a country">
                                    <Option value="china">China</Option>
                                    <Option value="use">U.S.A</Option>
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{ span: 12, offset: 6 }}
                        >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Card>
                </div>
            </Form>
        )
    }
}
const Profile = Form.create()(Demo)
export default Profile;