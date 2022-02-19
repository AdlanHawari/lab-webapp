module.exports = {
 
    apps: [
    
    {
    
    name: "nextjs", // ubah sesuai nama aplikasi yang dibuat
    
               script: "yarn",
    
    // sesuaikan port yang telah diubah
    
               args: "start",
    
    interpreter: "none",
    
    watch: true,
    
    merge_logs: true,
    
    env: {
    
    "NODE_ENV": "production", 
    
    }
    
    }
    
    ]
    
   }