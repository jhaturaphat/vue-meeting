<template>
    <div class="register container d-flex justify-content-center">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <img src="/img/logo.svg" alt="logo" class="img-logo">
            <div class="card">
                <div class="card-header">
                    <h1>REGISTER</h1>
                </div>
                <div class="card-body">
                    <form action="">
                        <div class="form-group">
                            <label for="">ชื่อผู้ใช้งาน</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">รหัสผ่าน</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">ชื่อ</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">นามสกุล</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group mt-5">
                            <button type="submit" class="btn btn-info btn-block">ลงทะเบียน</button>
                            <button type="button" class="btn btn-secondary btn-block mt-3">เข้าสู้ระบบ</button>
                        </div>
                        <br>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
label{
    color: #6C757D;
    font-weight: 300;
}
    .img-logo{
        width: 80%;
        display: block;
        margin: auto;
        margin-top: 15%;
        margin-bottom: 10%;
    }

    h1{
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        letter-spacing: 5px;
    }
    .card{
        margin-bottom: 10%;
    }
    .card-body{
        padding-left: 15%;
        padding-right: 15%;
    }
    
</style>