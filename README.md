# WESPACE
본 애플리케이션은 __`직원 간 업무 공유 노트 서비스`__ 개발 프로젝트입니다.

## View URL
| 기능 | HTTP 메서드 | 엔드포인트 | 이동 페이지 | 비고 |
|------|------------|-----------|------------|------|
| 소개 | GET | / | index | **로그인하지 않았을 때** 나타나는 소개 화면입니다. |
| 로그인 | GET | /login | login | **로그인 폼** 창입니다. |
| 회원가입 | GET | /join| join | **회원가입 폼** 창입니다. |
| 노트 메인 | GET | /:{name} | main | 로그인을 했을 시 **노트 메인** 화면으로 이동합니다. |
| 로그아웃 | GET | /logout | logout => index | **로그아웃** 처리를 하고 소개 페이지로 이동합니다. |

## Data URL
- 모든 기능에 대한 **Content-Type**은 `application/json` 입니다.

### User Data URL
- **로그인 액션**은 다음과 같습니다.
```
> 성공 시: 노트 메인으로 redirect
> 실패 시: View에서 AJAX 방식으로 처리
```
- **회원가입 액션**은 다음과 같습니다.
```
> 비밀번호는 6자 이상 영문 소문자와 숫자를 포함
> View에서 Validation 처리 후 소개 페이지로 이동
```

| 액션명 | HTTP | 엔드포인트 | 요청 Param | 응답 Param |
|-------|------|-----------|------------|-----------|
| 로그인 | POST | /login | email, password | result( SUCCESS, FAIL )<br />failType(null,<br />email_mismatch,<br />password_mismatch ) |  |
| 회원가입 | POST | /join | name, email, password | result( SUCCESS, FAIL )<br />failType: ( Already_exists ) |


### Folder Data URL
- **개인 폴더 목록**에서 `userId`는 서버에서 현재 접속중인 세션과 동일한 지 Validation을 수행합니다.

| 액션명 | HTTP | 엔드포인트 | 요청 Param | 응답 Param |
|-------|------|-----------|------------|-----------|
| 개인 폴더 목록 | GET | /folder/private/list | userId | result( SUCCESS, FAIL )<br />list( null, list ) |  |
| 공유 폴더 목록 | GET | /folder/shared/list | userId | result( list, SUCCESS )<br />list |  |
| 폴더 생성 | POST | /folder/shared/new | userId, title | result( SUCCESS, FAIL ) |  |
| 폴더 수정 | PATCH | /folder/shared/update | folderId, title | result( SUCCESS, FAIL ) |  |
| 폴더 삭제 | DELETE | /folder/shared/delete | folderId | result( SUCCESS, FAIL ) |  |
| 휴지통 목록 | GET | /folder/trash | folderId | result( SUCCESS, FAIL ) |  |
| 멤버 초대 | GET | /folder/include | userId, folderId, role | result( SUCCESS, FAIL ) |  |
| 멤버 삭제 | DELETE | /folder/exclude | userId, folderId | result( SUCCESS, FAIL ) |  |


### Note Data URL
- **노트 생성** 시 MongoDB에서 노트를 만들고 브라우저로부터 응답받은 `ObjectId`를 다시 Spring 서버에 요청합니다.
- **노트 갱신** 상태는 다음과 같습니다.
```
> 배포(PUBLISHED) | 활성(ACTIVED) | 잠김(LOCKED) | 삭제(DELETED)
```

| 액션명 | HTTP | 엔드포인트 | 요청 Param | 응답 Param |
|-------|------|-----------|------------|-----------|
| 노트 생성 | POST | /note/new | userId, objectId | result( SUCCESS, FAIL )<br />noteId, failType |  |
| 노트 수정 | PATCH | /note/update | noteId, title | result( SUCCESS, FAIL ) |  |
| 노트 삭제 | DELETE | /note/delete | noteId | result( SUCCESS, FAIL ) |  |
| 노트 갱신 | GET | /note/status | noteId, status | result( SUCCESS, FAIL ) |  |
| 노트 배포 | GET | /note/publish | noteId | result( SUCCESS, FAIL ) |  |
| 파일 업로드 | POST | /note/upload | noteId, file | result( SUCCESS, FAIL ) |  |
