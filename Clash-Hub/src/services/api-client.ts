import axios from "axios";

export default axios.create({
    baseURL:'https://api.clashofclans.com/v1',
    params:{
        key:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY0OTUzZDA3LWYzOGQtNGYwNy04NTI4LTkyYmQzYTU2NDU3YiIsImlhdCI6MTcxOTAwNDUxNywic3ViIjoiZGV2ZWxvcGVyLzRjZTdiZDVhLWI1MDAtMTVhMi1iMWYzLWRiM2NiYWMzZTk2ZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQxLjIwNC4yNC4xMTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.n6_Tb65Z8kNJefObzIx0RNzsO4qWsg4JLnxbrFnodPvDySZSNGc-oR-TvlLVQkYZsEWzA4VvbyyrZqRj6hHWGA'
    }
})