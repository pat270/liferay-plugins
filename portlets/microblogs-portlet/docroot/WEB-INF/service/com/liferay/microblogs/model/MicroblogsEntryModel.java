/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.microblogs.model;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.model.AuditedModel;
import com.liferay.portal.model.BaseModel;
import com.liferay.portal.model.CacheModel;
import com.liferay.portal.service.ServiceContext;

import com.liferay.portlet.expando.model.ExpandoBridge;

import java.io.Serializable;

import java.util.Date;

/**
 * The base model interface for the MicroblogsEntry service. Represents a row in the &quot;MicroblogsEntry&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link com.liferay.microblogs.model.impl.MicroblogsEntryModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link com.liferay.microblogs.model.impl.MicroblogsEntryImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see MicroblogsEntry
 * @see com.liferay.microblogs.model.impl.MicroblogsEntryImpl
 * @see com.liferay.microblogs.model.impl.MicroblogsEntryModelImpl
 * @generated
 */
public interface MicroblogsEntryModel extends AuditedModel,
	BaseModel<MicroblogsEntry> {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a microblogs entry model instance should use the {@link MicroblogsEntry} interface instead.
	 */

	/**
	 * Returns the primary key of this microblogs entry.
	 *
	 * @return the primary key of this microblogs entry
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this microblogs entry.
	 *
	 * @param primaryKey the primary key of this microblogs entry
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the microblogs entry ID of this microblogs entry.
	 *
	 * @return the microblogs entry ID of this microblogs entry
	 */
	public long getMicroblogsEntryId();

	/**
	 * Sets the microblogs entry ID of this microblogs entry.
	 *
	 * @param microblogsEntryId the microblogs entry ID of this microblogs entry
	 */
	public void setMicroblogsEntryId(long microblogsEntryId);

	/**
	 * Returns the company ID of this microblogs entry.
	 *
	 * @return the company ID of this microblogs entry
	 */
	@Override
	public long getCompanyId();

	/**
	 * Sets the company ID of this microblogs entry.
	 *
	 * @param companyId the company ID of this microblogs entry
	 */
	@Override
	public void setCompanyId(long companyId);

	/**
	 * Returns the user ID of this microblogs entry.
	 *
	 * @return the user ID of this microblogs entry
	 */
	@Override
	public long getUserId();

	/**
	 * Sets the user ID of this microblogs entry.
	 *
	 * @param userId the user ID of this microblogs entry
	 */
	@Override
	public void setUserId(long userId);

	/**
	 * Returns the user uuid of this microblogs entry.
	 *
	 * @return the user uuid of this microblogs entry
	 * @throws SystemException if a system exception occurred
	 */
	@Override
	public String getUserUuid() throws SystemException;

	/**
	 * Sets the user uuid of this microblogs entry.
	 *
	 * @param userUuid the user uuid of this microblogs entry
	 */
	@Override
	public void setUserUuid(String userUuid);

	/**
	 * Returns the user name of this microblogs entry.
	 *
	 * @return the user name of this microblogs entry
	 */
	@AutoEscape
	@Override
	public String getUserName();

	/**
	 * Sets the user name of this microblogs entry.
	 *
	 * @param userName the user name of this microblogs entry
	 */
	@Override
	public void setUserName(String userName);

	/**
	 * Returns the create date of this microblogs entry.
	 *
	 * @return the create date of this microblogs entry
	 */
	@Override
	public Date getCreateDate();

	/**
	 * Sets the create date of this microblogs entry.
	 *
	 * @param createDate the create date of this microblogs entry
	 */
	@Override
	public void setCreateDate(Date createDate);

	/**
	 * Returns the modified date of this microblogs entry.
	 *
	 * @return the modified date of this microblogs entry
	 */
	@Override
	public Date getModifiedDate();

	/**
	 * Sets the modified date of this microblogs entry.
	 *
	 * @param modifiedDate the modified date of this microblogs entry
	 */
	@Override
	public void setModifiedDate(Date modifiedDate);

	/**
	 * Returns the content of this microblogs entry.
	 *
	 * @return the content of this microblogs entry
	 */
	@AutoEscape
	public String getContent();

	/**
	 * Sets the content of this microblogs entry.
	 *
	 * @param content the content of this microblogs entry
	 */
	public void setContent(String content);

	/**
	 * Returns the type of this microblogs entry.
	 *
	 * @return the type of this microblogs entry
	 */
	public int getType();

	/**
	 * Sets the type of this microblogs entry.
	 *
	 * @param type the type of this microblogs entry
	 */
	public void setType(int type);

	/**
	 * Returns the receiver user ID of this microblogs entry.
	 *
	 * @return the receiver user ID of this microblogs entry
	 */
	public long getReceiverUserId();

	/**
	 * Sets the receiver user ID of this microblogs entry.
	 *
	 * @param receiverUserId the receiver user ID of this microblogs entry
	 */
	public void setReceiverUserId(long receiverUserId);

	/**
	 * Returns the receiver user uuid of this microblogs entry.
	 *
	 * @return the receiver user uuid of this microblogs entry
	 * @throws SystemException if a system exception occurred
	 */
	public String getReceiverUserUuid() throws SystemException;

	/**
	 * Sets the receiver user uuid of this microblogs entry.
	 *
	 * @param receiverUserUuid the receiver user uuid of this microblogs entry
	 */
	public void setReceiverUserUuid(String receiverUserUuid);

	/**
	 * Returns the receiver microblogs entry ID of this microblogs entry.
	 *
	 * @return the receiver microblogs entry ID of this microblogs entry
	 */
	public long getReceiverMicroblogsEntryId();

	/**
	 * Sets the receiver microblogs entry ID of this microblogs entry.
	 *
	 * @param receiverMicroblogsEntryId the receiver microblogs entry ID of this microblogs entry
	 */
	public void setReceiverMicroblogsEntryId(long receiverMicroblogsEntryId);

	/**
	 * Returns the social relation type of this microblogs entry.
	 *
	 * @return the social relation type of this microblogs entry
	 */
	public int getSocialRelationType();

	/**
	 * Sets the social relation type of this microblogs entry.
	 *
	 * @param socialRelationType the social relation type of this microblogs entry
	 */
	public void setSocialRelationType(int socialRelationType);

	@Override
	public boolean isNew();

	@Override
	public void setNew(boolean n);

	@Override
	public boolean isCachedModel();

	@Override
	public void setCachedModel(boolean cachedModel);

	@Override
	public boolean isEscapedModel();

	@Override
	public Serializable getPrimaryKeyObj();

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj);

	@Override
	public ExpandoBridge getExpandoBridge();

	@Override
	public void setExpandoBridgeAttributes(BaseModel<?> baseModel);

	@Override
	public void setExpandoBridgeAttributes(ExpandoBridge expandoBridge);

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext);

	@Override
	public Object clone();

	@Override
	public int compareTo(MicroblogsEntry microblogsEntry);

	@Override
	public int hashCode();

	@Override
	public CacheModel<MicroblogsEntry> toCacheModel();

	@Override
	public MicroblogsEntry toEscapedModel();

	@Override
	public MicroblogsEntry toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}