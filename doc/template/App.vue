<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/assets/adminlte.min.css" />
  <link rel="stylesheet" :href="skinPath" />
  <link rel="stylesheet" href="/assets/responsive.css" />

  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper fixed">
      <div class="main-header"></div>
      <div class="sidebar-wrapper">
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <img
                  src="/assets/logo.png"
                  class="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div class="info">
                <a href="#" class="d-block">全栈然叔</a>
              </div>
            </div>
            <!-- Sidebar Menu -->
            <nav class="mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library-->
                <li class="nav-item has-treeview menu-open">
                  <ul class="nav nav-treeview">
                    <li
                      class="nav-item"
                      v-for="item in menu"
                      v-bind:key="item.path"
                    >
                      <a :href="'/' + item.path" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ item.prefix }}{{ item.name }}</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- /.sidebar-menu -->
          </div>
          <!-- /.sidebar -->
        </aside>
      </div>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <nav
            v-if="breadcrumb"
            style="border-radius: 5px"
            aria-label="breadcrumb"
            class="navbar navbar-white navbar-light"
          >
            <ol class="breadcrumb" v-html="breadcrumb"></ol>
          </nav>
        </div>
        <!-- /.content-header -->

        <div v-if="catalogs.length > 0" class="markdown-catalogs pull-right">
          <ul class="section-nav">
            <li
              class="toc-entry toc-h2"
              v-for="item in catalogs"
              :key="item.title"
            >
              <a :href="'#' + item.hash">{{ item.title }}</a>
              <ul>
                <li
                  class="toc-entry toc-h2"
                  v-for="child in item.children"
                  :key="child.title"
                >
                  <a :href="'#' + child.hash">{{ child.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          class="markdown-body"
          :class="{ 'body-catalogs': catalogs.length > 0 }"
        >
          <!-- Main content -->
          <div class="content">
            <div v-html="markdown"></div>
            <!-- <h1>AAACCC</h1> -->
            <div>&nbsp;</div>
          </div>
          <!-- /.content -->
        </div>
      </div>

      <div class="toolkits">
        <div class="toolkits-item">
          <a data-widget="pushmenu" href="#">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-list"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </div>
        <div class="toolkits-item">
          <a href="#" onclick="location.reload();">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-clockwise"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              />
            </svg>
          </a>
        </div>
        <div class="toolkits-item">
          <a href="#" onclick="history.back();">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </a>
        </div>
      </div>

      <aside class="control-sidebar control-sidebar-dark"></aside>
      <footer class="main-footer">
        <strong>
          Copyright &copy; 2020-2080
          <a href="https://adminlte.io">Smart Press</a>.
        </strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 0.0.1
        </div>
      </footer>
    </div>
  </body>

  <script src="/assets/jquery.min.js"></script>
  <script src="/assets/adminlte.min.js"></script>
</template>
<script>
</script>