  getFamilyById(id: number): Observable<any> {
    const apiUrl = `${this.configuration.getFamily}/${id}`;
    return this.httpService
      .makeGetReq(apiUrl)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }

          return res;
        })
      )
  }
