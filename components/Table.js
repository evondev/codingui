import React from "react";
import Template from "./Template";

const Table = () => {
  return (
    <>
      <Template
        title="Table"
        source="table"
        html={`
        <div class="table">
            <table>
              <thead>
                <tr>
                  <th>Project name</th>
                  <th>Contact person</th>
                  <th>Project lead</th>
                  <th>Team</th>
                  <th>Progress</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="image-text">
                      <img src="/images/unicorn.png" alt="">
                      <span>Rachel</span>
                    </div>
                  </td>
                  <td>Mike wazowski</td>
                  <td>Mike Dawson</td>
                  <td>
                    <div class="image-list">
                      <img src="/images/outer-space.png" alt="">
                      <img src="/images/rachelizmarvel.png" alt="">
                    </div>
                  </td>
                  <td>
                    <div class="progress">
                      <div class="percent"></div>
                    </div>
                  </td>
                  <td>
                    <div class="tag">12 days left</div>
                  </td>
                  <td>
                    <i class="fal fa-ellipsis-h action"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="image-text">
                      <img src="/images/logo.png" alt="">
                      <span>Evondev</span>
                    </div>
                  </td>
                  <td>Mike wazowski</td>
                  <td>Mike Dawson</td>
                  <td>
                    <div class="image-list">
                      <img src="/images/outer-space.png" alt="">
                      <img src="/images/rachelizmarvel.png" alt="">
                    </div>
                  </td>
                  <td>
                    <div class="progress">
                      <div class="percent" style="background-color: var(--purple);width: 75%"></div>
                    </div>
                  </td>
                  <td>
                    <div class="tag">12 days left</div>
                  </td>
                  <td>
                    <i class="fal fa-ellipsis-h action"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `}
        css={`
          .table {
            width: 100%;
            overflow-x: auto;
          }
          .table table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            color: #697b92;
          }
          .table tr {
            border-bottom: 1px solid #e6e9ec;
          }
          .table th {
            font-size: 1.2rem;
            color: #aeb6c3;
            text-align: left;
            font-weight: 400;
            padding: 1rem;
            white-space: nowrap;
          }
          .table td {
            vertical-align: middle;
            padding: 1.5rem 1rem;
            white-space: nowrap;
            font-size: 1.2rem;
            font-weight: normal;
          }
          .table .image-text {
            display: flex;
            align-items: center;
          }
          .table .image-text img {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 1rem;
            object-fit: cover;
            margin-right: 1rem;
            flex-shrink: 0;
          }
          .table .image-list {
            display: flex;
            min-width: 10rem;
          }
          .table .image-list img {
            width: 3rem;
            height: 3rem;
            border-radius: 6px;
            object-fit: cover;
            margin-right: 1rem;
            flex-shrink: 0;
          }
          .table .progress {
            width: 15rem;
            height: 5px;
            background-color: #ccc;
            border-radius: 1rem;
            position: relative;
          }
          .table .progress .percent {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 50%;
            background-color: var(--primary);
            border-radius: inherit;
          }
          .table .tag {
            display: inline-block;
            padding: 1rem;
            color: #999;
            font-size: 1.2rem;
            text-align: center;
            background-color: #eee;
            border-radius: 1rem;
          }
          .table .action {
            display: block;
            text-align: center;
            font-size: 3rem;
          }
        `}
      ></Template>
    </>
  );
};

export { Table };
