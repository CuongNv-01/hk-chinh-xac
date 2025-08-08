<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title" style="color: #000; font-weight: 900;">Về chúng tôi</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/logo/banner.png);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About us</NuxtLink></li>
          <li class="active">Về chúng tôi</li>
        </ul>
      </div>
    </section>

    <!-- About -->
    <section class="section section-lg bg-default">
      <div class="container">
        <div class="tabs-custom row row-50 justify-content-center flex-lg-row-reverse text-center text-md-left" id="tabs-4">
          <div class="col-lg-4 col-xl-3">
            <h5 class="text-spacing-200">Nhiều năm kinh nghiệm</h5>
            <ul class="nav list-category list-category-down-md-inline-block">
              <li class="list-category-item wow fadeInRight" role="presentation" data-wow-delay="0s">
                <a class="active" href="#tabs-4-2" data-toggle="tab">Định hướng</a>
              </li>
              <li class="list-category-item wow fadeInRight" role="presentation" data-wow-delay=".1s">
                <a href="#tabs-4-3" data-toggle="tab">Mục tiêu</a>
              </li>
              <li class="list-category-item wow fadeInRight" role="presentation" data-wow-delay=".2s">
                <a href="#tabs-4-1" data-toggle="tab">Về chúng tôi</a>
              </li>
            </ul>
            <NuxtLink class="button button-lg button-primary button-winona" to="/contact">Liên hệ</NuxtLink>
          </div>
          <div class="col-lg-8 col-xl-9">
            <!-- Tab panes-->
            <div class="tab-content tab-content-1">
              <div class="tab-pane fade show active" id="tabs-4-2">
                <h4>Định hướng của chúng tôi</h4>
                <p>Công ty định hướng trở thành đơn vị tiên phong trong lĩnh vực sản xuất, khuôn nhựa, không ngừng đổi mới sáng tạo, nâng cao chất lượng sản phẩm/dịch vụ và xây dựng giá trị bền vững cho khách hàng, cộng đồng và đội ngũ nhân sự.</p>
                <img src="/images/internal/b19.jpeg" alt="" width="835" height="418"/>
              </div>
              <div class="tab-pane fade" id="tabs-4-3">
                <h4>Mục tiêu phát triển</h4>
                <p>Trở thành doanh nghiệp dẫn đầu về gia công cơ khí chính xác cao tại Việt Nam. Mở rộng thị trường xuất khẩu sang nước ngoài.</p>
                <p>Đầu tư hệ thống máy móc thiết bị hiện đại, nâng cao chất lượng sản phẩm và dịch vụ. Xây dựng đội ngũ nhân sự chuyên nghiệp, sáng tạo và tận tâm với khách hàng.</p>
                <img src="/images/internal/nhua-1.jpeg" alt="" width="835" height="418"/>
              </div>
              <div class="tab-pane fade" id="tabs-4-1">
                <h4>Giới thiệu về Công ty HK</h4>
                <p>Công ty HK là đơn vị hàng đầu trong lĩnh vực sản xuất khuôn mẫu và gia công cơ khí theo tiêu chuẩn. Chúng tôi chuyên sản xuất các loại mặt hàng gia dụng, sản phẩm cơ khí, các linh kiện, phụ tùng cho các ngành nghề ô tô, xe máy...</p>
                <img src="/images/internal/nhua-1.jpeg" alt="" width="835" height="418"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Icon Classic-->
    <section class="section section-lg bg-gray-100">
      <div class="container">
        <div class="row row-md row-50">
          <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay="0s">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div class="box-icon-classic-icon linearicons-hammer-wrench"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title"><NuxtLink to="/service">Công nghệ Hiện đại</NuxtLink></h5>
                  <p class="box-icon-classic-text">Sử dụng máy CNC và hệ thống EDM Charmilles tiên tiến.</p>
                </div>
              </div>
            </article>
          </div>
          <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay=".1s">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div class="box-icon-classic-icon linearicons-apartment"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title"><NuxtLink to="/service">Thiết bị Chính xác</NuxtLink></h5>
                  <p class="box-icon-classic-text">Máy ép nhựa Sumitomo, thiết bị kiểm tra CMM Zeiss đảm bảo độ chính xác cao.</p>
                </div>
              </div>
            </article>
          </div>
          <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay=".2s">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div class="box-icon-classic-icon linearicons-pencil-ruler"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title"><NuxtLink to="/service">Tiêu chuẩn Quốc tế</NuxtLink></h5>
                  <p class="box-icon-classic-text">Đạt chuẩn FUTABA, DME, HASCO - đảm bảo chất lượng sản phẩm tốt nhất.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO metadata
definePageMeta({
  title: 'Về chúng tôi - HK Chính Xác',
  description: 'Tìm hiểu về Công ty HK Chính Xác - đơn vị hàng đầu trong lĩnh vực sản xuất khuôn mẫu và gia công cơ khí chính xác với công nghệ hiện đại và đội ngũ chuyên nghiệp.'
})

useHead({
  title: 'Về chúng tôi - HK Chính Xác',
  meta: [
    { name: 'description', content: 'Tìm hiểu về Công ty HK Chính Xác - đơn vị hàng đầu trong lĩnh vực sản xuất khuôn mẫu và gia công cơ khí chính xác với công nghệ hiện đại và đội ngũ chuyên nghiệp.' },
    { property: 'og:title', content: 'Về chúng tôi - HK Chính Xác' },
    { property: 'og:description', content: 'Công ty HK chuyên sản xuất khuôn mẫu và gia công cơ khí theo tiêu chuẩn với công nghệ hiện đại.' },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>