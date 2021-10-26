# CBI React (https://cbidigital.com/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)


# Mục lục

## I. Giới thiệu và cài đặt
## II. Cấu trúc folder
## III. Giới thiệu CBI-cli

<br>
<br>
CBI-React là một framework về FE được xây dựng bằng React. Được cài đặt sẳn redux, redux-saga, redux-toolkit, material-ui, translate, http 
<br />
<br />

## Cài đặt:

1. Cài đặt thông qua cbi-cli :
<br>
<br>
B1:&nbsp; `npm install -g cbi-cli`
<br>
B2:&nbsp; `cbi new [project-name]` 

<br>
<br>

2. Cài đặt thủ công
<br>
<br>
B1:  `npm install cbi-react-core`
<br>
B2: Config
<br>
<br>

# I Cấu trúc folder
Sau khi tạo project bằng cli, project sẽ tự động được generate bằng tool với cấu trúc các folder như sau:

```
src
├───app
│   ├───hooks
│   ├───models
│   ├───provider
│   ├───utils
│   ├───validate
│   └───store
├───cbi-react-core
│   ├───@types
│   ├───core-ui
│   │   ├───atoms
│   │   ├───molecules
│   │   └───organisms
│   ├───hooks
│   ├───interface
│   └───utils
├───config
├───routers
├───views
│   ├───assets
│   ├───components
│   ├───layout
│   ├───pages
|   ├───locales
│   ├───styles
│   └───theme

```
## 1. config

## 2. routers

## 3. views

## 4. app

## 5. cbi-react-core

<br>
<br>

#  Chú ý

## 1. Mõi file component chỉ export 1 component duy nhất
---
    Bằng cách giữ cho mõi file chỉ duy nhất 1 component sẽ dễ dàng cho coder dễ dàng trong import và biết làm cách nào để chỉnh sửa và testing

<br>

## 2. Tránh việc render quá nhiều trong 1 component
---
    Tìm cách chia nhỏ các component, tránh việc render quá nhiều trong một component

<br>

## 3. Luôn luôn sử dụng prop-type (typescript)
---

<br>

## 4. Ưu tiên sử dụng staless component
---
    Bằng cách sử dụng statless component, ứng dụng sẽ dễ testing và tập trung vào logic 

<br>

## 5. Không viết những thông tin của 1 đối tượng vào những folder riêng lẽ
---

<br>

## 6. Config tập trung
---

<br>

## 7. Hạn chế sự liên quan giữa các component
---

<br>

<br>
<br>

# II Giới thiệu Atoms design system (https://atomicdesign.bradfrost.com/)
Atoms là nguyên lý thiết kế giúp tạo và bảo trì hệ thống được dễ dàng hơn. Là bản trình bày tất cả những chi tiết liên quan đến gia diện cho phép bạn triển khai giao diện người dùng chất lượng cao và nhất quán hơn.

## 1. Atoms
Thành phần cơ bản nhất của hệ thống, là những thành phần riêng lẻ nhất ví dụ như button, label, input, text, link, image. Bất kỳ một thay đổi nhỏ nào cũng có thể ảnh hưởng đến toàn bộ hệ thống

<br>

## 2. Molecules
Tập hợp từ 2 thành phần cơ bản trở lên dùng để thiết kế một element cụ thể nào đó ví dụ Label + Input + Button

<br>

## 3. Organisms
Tập hợp nhiều thành phần molecules lại tạo thành 1 section hoặc widget cụ thể trên trang

<br>

## 4. Templates
Tập hợp nhiều Organisms lại tạo thành 1 trang hoàn thiện và nội dung sample

<br>

## 5. Page
Là template được đỗ dữ liệu vào tạo thành 1 trang hoàn chỉnh đưa đến end-user sử dụng

<br>
<br>


# III Giới thiệu về cbi-cli

Là tool hỗ trợ trong quá trình code, sinh code tự động và delploy dự án React. Với các chức năng chính:
<br>
1. Tạo project tự động : `cbi new <project-name>`
2. Tạo Model: `cbi g model <model-name>`
3. Tạo store: `cbi g store <store-name>`
4. Tạo page: `cbi g page <page-name> [options]`
5. Tạo validate: `cbi g validate <validate-name>`
6. Tạo http: `cbi g http <http-file>`
6. Tạo cache: `cbi g cache <cache-file>`
6. Tạo authen: `cbi g auth <auth-file>`
7. Tạo test file: `cbi g test <test-file>`


<br>
<br>

# Giới thiệu thêm

Những System Design có thể sử dụng: <br>
Material Design Pro: https://material-app.bootlab.io/dashboard/default
<br>
Ant Design Pro: https://preview.pro.ant.design/dashboard/analysis

